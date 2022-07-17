const merge = require("lodash.merge");

const WORLD_STATE_KEY =
  "com.twilioquest.developer-fundamentals.tower_of_knowledge";

const INITIAL_STATE = {
  elevator: {
    isTransitioning: false,
    warpTarget: [],
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (
    event.name === "playerDidInteract" &&
    (event.target.key === "elevator-control" ||
      event.target.key === "elevator-door")
  ) {
    world.showOverlayComponent({
      key: "devFundamentalsElevator",
      props: {
        fadeIn: true,
        fadeOut: true,
        floors: [
          {
            title: "G. Lobby",
            description:
              "Here is some description about the contents of this floor.",
            onSelect: async () => {
              const worldState = world.getState(WORLD_STATE_KEY);
              worldState.elevator.isTransitioning = true;
              worldState.elevator.warpTarget = [
                "tower_of_knowledge",
                "player_entry1",
                "default",
              ];
              world.setState(WORLD_STATE_KEY, worldState);

              // world.warp("tower_of_knowledge", "player_entry1", "default");
            },
          },
          {
            title: "L1. File System Fundamentals",
            description:
              "Here is some description about the contents of this floor.",
            onSelect: () =>
              world.warp("tower_of_knowledge", "player_entry1", "default"),
          },
          {
            title: "L2. Trendy Terminal Topics",
            description:
              "Here is some description about the contents of this floor.",
            onSelect: () =>
              world.warp("tower_of_knowledge", "player_entry1", "default"),
          },
        ],
      },
    });
  }

  if (event.name === "mapDidLoad" && worldState.elevator.isTransitioning) {
    // If a map loaded and the elevator was transitioning
    // we need to hide the elevator controls.
    worldState.elevator.isTransitioning = false;
    world.showOverlayComponent(); // TODO: we should add a hideOverlayComponent function to actually trigger hide animations as expected instead of this method.
  }

  // Top shelf pieces need to be longer so they always depth sort
  // above the player, even when the player would normally be depth
  // sorted above them.
  world.forEachEntities(
    ({ instance }) => instance.isTopShelf,
    (shelf) => {
      shelf.sprite.body.height *= 2;
    }
  );

  // Match objectives to shelves they should unlock when an
  // objective completion event occurs.
  const unlockPairs = [
    ["objective3", "fs-shelf-1"],
    ["objective3", "fs-shelf-2"],
    ["objective5", "fs-shelf-3"],
    ["objective7", "fs-shelf-4"],
  ];
  if (
    event.name === "objectiveCompleted" ||
    event.name === "objectiveCompletedAgain"
  ) {
    unlockPairs.forEach(([objectiveKey, shelfKey]) => {
      if (event.target.key === objectiveKey) {
        world.hideEntities(shelfKey);
      }
    });
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
