const merge = require("lodash.merge");

const WORLD_STATE_KEY =
  "com.twilioquest.developer-fundamentals.tower_of_knowledge";

const INITIAL_STATE = {
  elevator: {
    isTransitioning: false,
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === "playerDidInteract" && event.target.key === "telescope") {
    //
    // TODO: Restore proper functionality:
    // viewTower(world);
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
              world.setState(WORLD_STATE_KEY, worldState);

              world.warp("tower_exterior", "player_entry1", "tower-exterior");
            },
          },
          {
            title: "L1. File System Fundamentals",
            description:
              "Here is some description about the contents of this floor.",
            onSelect: () =>
              world.warp("tower_exterior", "player_entry1", "tower-exterior"),
          },
          {
            title: "L2. Trendy Terminal Topics",
            description:
              "Here is some description about the contents of this floor.",
            onSelect: () =>
              world.warp("tower_exterior", "player_entry1", "tower-exterior"),
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

  world.setState(WORLD_STATE_KEY, worldState);
};
