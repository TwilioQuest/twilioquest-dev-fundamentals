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
  terminal: {
    hasViewedTv: false,
  },
  lobby: {
    wokenLibrarian: false,
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

  //   // INTERACT BY KEY EVENT
  // const runObjectNotification = ({ target: { key = "default" } }) => {
  //   world.startConversation(key, key + ".png");
  //   };

  world.forEachEntities("librarian-lobby", async (librarian) => {
    if (event.name === "mapDidLoad") {
      if (worldState.lobby.wokenLibrarian) {
        librarian.isConversationDisabled = false;
        librarian.idleAnimations.startIdle();
      } else {
        librarian.isConversationDisabled = true;
        librarian.idleAnimations.stopIdle();
        librarian.playAnimation("sleep", true);
      }
    }

    if (
      event.name === "playerDidInteract" &&
      event.target.key === "librarian-lobby"
    ) {
      await librarian.playAnimation("wakeUp");

      const currentWorldState = world.getState(WORLD_STATE_KEY);
      currentWorldState.lobby.wokenLibrarian = true;
      world.setState(WORLD_STATE_KEY, currentWorldState);

      librarian.isConversationDisabled = false;
      librarian.idleAnimations.startIdle();

      world.startConversation(
        librarian.conversation,
        librarian.conversationAvatar
      );
    }
  });

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
          {
            title: "L2. Terminal Fundamentals",
            description: "Learn what how to use your computer's Terminal.",
            onSelect: createChangeFloorHandler(world, [
              "tower_of_knowledge",
              "player_entry1",
              "terminal",
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

  // if (event.name === "playerDidInteract") {
  //   console.log(`Interacting with ${event.target.key}`);

  //   if (event.target.notify) runObjectNotification(event);
  //   }

  // THIS WORKS FOR ONE INTERACTION:
  // if (event.name === 'playerDidInteract' && event.target.key === 'bookManuscript') {
  //   world.startConversation('bookManuscript', 'BookPodium_IlluminatedManuscript.png');
  // }

  // // FOR MULTIPLE INTERACTIONS
  // if (event.name === 'playerDidInteract'){
  //   world.startConversation(key, key + '.png');
  // }

  if (
    event.name === "playerDidInteract" &&
    event.target.key === "play-video-tv"
  ) {
    world.forEachEntities("play-video-tv-screen", async (tv) => {
      await tv.playAnimation("on");

      if (event.target.video === "terminal") {
        world.showOverlayComponent({
          key: "iframe",
          props: {
            url: "https://www.youtube.com/embed/lZ7Kix9bjPI",
            shouldUseTqChrome: true,
            title: "What is a terminal and why should I learn about it?",
            width: "80vw",
            height: "80vh",
            fadeIn: true,
            fadeOut: true,
          },
        });

        worldState.terminal.hasViewedTv = true;
      } else {
        // Original video player implementation for the
        // File System floor
        world.showOverlayComponent({
          key: "iframe",
          props: {
            url: "https://www.youtube.com/embed/2zLQwOiIac8",
            shouldUseTqChrome: true,
            title: "What is the file system and why should I learn about it?",
            width: "80vw",
            height: "80vh",
            fadeIn: true,
            fadeOut: true,
          },
        });

        markTvAsViewed(worldState);
      }
    });
  }

  if (
    event.name === "triggerAreaWasEntered" &&
    event.target.key === "triggerViewTv" &&
    !hasViewedTv(worldState)
  ) {
    viewTv(world);
  }

  if (event.name === "overlayComponentDidHide") {
    world.forEachEntities("play-video-tv-screen", async (tv) => {
      await tv.playAnimation("off");
    });
  }

  // Match objectives to shelves they should unlock when an
  // objective completion event occurs.
  const unlockPairs = [
    ["fs-03-ls", "fs-shelf-2"],
    ["fs-04-cd", "fs-shelf-3"],
    ["fs-05-mkdir", "fs-shelf-4"],
    ["fs-07-rm", "fs-shelf-07"],
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
