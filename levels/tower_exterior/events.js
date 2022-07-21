const merge = require("lodash.merge");
const viewTower = require("./events/viewTower");

const WORLD_STATE_KEY = "com.twilioquest.developer-fundamentals";
const TOOLBOX_COUNT_TO_FIND = 3;
const toolBoxContents = [
  'This box contains a diagram labeled "file tree". Maybe there will be a nice forest inside the tower?',
  'This box contains a weird bunch of text called a "terminal". This must be how the dinosaurs used computers!',
  'This box contains a list of "shells". I wonder if they\'ll be sold over by the seashore.',
];

const INITIAL_STATE = {
  towerExterior: {
    hasStartedInitialTowerTween: false,
    playerWantsToLearn: "",
    toolboxesFound: [],
    openedPainPointCollector: false,
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

  if (
    event.name === "playerDidInteract" &&
    event.target.key &&
    event.target.key.includes("toolbox")
  ) {
    // If new toolbox, add to toolBoxes found
    // Hide toolbox entity
    const toolBoxKey = event.target.key;

    if (!worldState.towerExterior.toolboxesFound.includes(toolBoxKey)) {
      worldState.towerExterior.toolboxesFound.push(toolBoxKey);
    }

    const toolboxCountFound = worldState.towerExterior.toolboxesFound.length;
    if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
      // There are 6 toolboxes, player can find more than 3.
      world.showNotification(
        `${
          toolBoxContents[toolboxCountFound - 1]
        } <br/><br/> I\'ve found all the toolboxes I needed to fix the <span class="highlight">New Developer Pain Point Collector!</span>`
      );
    } else {
      const remainingToolBoxes = TOOLBOX_COUNT_TO_FIND - toolboxCountFound;

      world.showNotification(
        `${
          toolBoxContents[toolboxCountFound - 1]
        } <br/><br/> <span class="highlight">I still need to find ${remainingToolBoxes} more toolbox${
          remainingToolBoxes > 1 ? "es" : ""
        }!</span>`
      );
    }
  }

  // Hide all found toolboxes
  worldState.towerExterior.toolboxesFound.forEach((toolBoxKey) => {
    world.hideEntities(toolBoxKey);
  });

  const toolboxCountFound = worldState.towerExterior.toolboxesFound.length;
  if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
    // All toolboxes found, replace cloud explorer with new conversation
    world.destroyEntities("space-explorer-initial");
    // TODO: This destroy causes some console errors since destroy is not cleaning up onComplete event listeners properly for animations. We should address this in the twilioquest repository.
    // We cannot use hide since interactable is still true when hidden.
    world.showEntities("space-explorer-pain-point");
  } else {
    world.showEntities("space-explorer-initial");
    // TODO: See above if statement (this hide does nothing for interactions
    // since other npc copy is rendered on top and takes precedence, still
    // need to hide in case animations diverge.
    world.hideEntities("space-explorer-pain-point");
  }

  if (
    event.name === "playerDidInteract" &&
    event.target.key === "door-dev-tower"
  ) {
    if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
      world.showNotification(
        'I guess The Librarian still needs more time to finish tidying up... <span class="highlight">I should come back in a future game update!</span>'
      );
    } else {
      world.showNotification(
        "The tower doors won't budge... I should keep looking around and see if there's a way to open them."
      );
    }
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
