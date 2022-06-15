const merge = require("lodash.merge");
const viewTower = require("./events/viewTower");

const WORLD_STATE_KEY = "com.twilioquest.developer-fundamentals";

const INITIAL_STATE = {
  towerExterior: {
    hasStartedInitialTowerTween: false,
    playerWantsToLearn: "",
    toolboxesFound: [],
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === "playerDidInteract" && event.target.key === "telescope") {
    viewTower(world);
  }

  if (
    event.name === "triggerAreaWasEntered" &&
    event.target.key === "triggerViewTower" &&
    !worldState.towerExterior.hasStartedInitialTowerTween
  ) {
    worldState.towerExterior.hasStartedInitialTowerTween = true;

    viewTower(world);
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
