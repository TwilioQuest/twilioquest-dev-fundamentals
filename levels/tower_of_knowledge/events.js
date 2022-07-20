const merge = require("lodash.merge");

const WORLD_STATE_KEY =
  "com.twilioquest.developer-fundamentals.tower_of_knowledge";

const INITIAL_STATE = {
  elevator: {
    isTransitioning: false,
    warpTarget: [],
  },
};

const createChangeFloorHandler = (world, warpTarget) => () => {
  const worldState = world.getState(WORLD_STATE_KEY);
  worldState.elevator.isTransitioning = true;
  worldState.elevator.warpTarget = warpTarget;
  world.setState(WORLD_STATE_KEY, worldState);

  world.warp(...warpTarget);
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
            description: "The entrance to the Tower of Infinite Knowledge.",
            onSelect: createChangeFloorHandler(world, [
              "tower_of_knowledge",
              "player_entry2",
              "default",
            ]),
          },
          {
            title: "L1. File System Fundamentals",
            description:
              "Learn about how the file system on your computer works.",
            onSelect: createChangeFloorHandler(world, [
              "tower_of_knowledge",
              "player_entry1",
              "file-system",
            ]),
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
