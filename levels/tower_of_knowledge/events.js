const merge = require("lodash.merge");
const viewTv = require("./events/viewTv");

const WORLD_STATE_KEY =
  "com.twilioquest.developer-fundamentals.tower_of_knowledge";

const INITIAL_STATE = {
  elevator: {
    isTransitioning: false,
    warpTarget: [],
  },
  fileSystem: {
    hiddenEntities: [],
    openedDoors: [],
  },
};

const hasViewedTv = (worldState) => {
  return worldState.fileSystem.hiddenEntities.includes("watch-video-blocker");
};

const markTvAsViewed = (worldState) => {
  if (hasViewedTv(worldState)) {
    // No edits necessary!
    return;
  }

  worldState.fileSystem.hiddenEntities.push("watch-video-blocker", "tv-arrow");
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

  if (
    event.name === "playerDidInteract" &&
    event.target.key === "play-video-tv"
  ) {
    // world.showNotification("This is where the YouTube video goes.");
    world.showOverlayComponent({
      key: "iframe",
      props: {
        url: "https://www.youtube.com/embed/X-E3fL4LHbM",
        shouldUseTqChrome: true,
        title: "YouTube Video Name",
        width: "80vw",
        height: "80vh",
        fadeIn: true,
        fadeOut: true,
      },
    });

    markTvAsViewed(worldState);
  }

  if (
    event.name === "triggerAreaWasEntered" &&
    event.target.key === "triggerViewTv" &&
    !hasViewedTv(worldState)
  ) {
    viewTv(world);
  }

  // Match objectives to shelves they should unlock when an
  // objective completion event occurs.
  const unlockPairs = [
    ["fs-03-ls", "fs-shelf-2"],
    ["fs-04-cd", "fs-shelf-3"],
    ["fs-05-mkdir", "fs-shelf-4"],
  ];

  const doorPairs = [
    ["fs-01-path", "fs-door-1"],
    ["fs-02-pwd", "fs-door-2"],
  ];

  if (
    event.name === "objectiveCompleted" ||
    event.name === "objectiveCompletedAgain"
  ) {
    unlockPairs.forEach(([objectiveKey, shelfKey]) => {
      if (event.objective === objectiveKey) {
        worldState.fileSystem.hiddenEntities.push(shelfKey);
      }
    });

    doorPairs.forEach(([objectiveKey, doorKey]) => {
      if (event.objective === objectiveKey) {
        worldState.fileSystem.openedDoors.push(doorKey);
      }
    });
  }

  // Hide entities
  worldState.fileSystem.hiddenEntities.forEach((hiddenEntityKey) => {
    world.hideEntities(hiddenEntityKey);
  });

  // Open doors
  worldState.fileSystem.openedDoors.forEach((openedDoorKey) => {
    world.forEachEntities(
      openedDoorKey,
      (door) => door.state && door.state.fsm && door.state.fsm.action("open")
    );
  });

  world.setState(WORLD_STATE_KEY, worldState);
};
