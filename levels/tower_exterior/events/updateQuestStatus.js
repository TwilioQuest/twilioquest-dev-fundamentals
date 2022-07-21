const LEVEL = "tower_exterior";
const TITLE = `Entering the Tower`;

// Based on the current level state, determine what
function updateQuestStatus({
  event,
  world,
  worldState,
  TOOLBOX_COUNT_TO_FIND,
}) {
  let description = `
    Find the entrance to the Tower of Infinite Knowledge!
  `;
  let complete = false;

  if (worldState.towerExterior.hasStartedInitialTowerTween) {
    description = `
      Figure out how to get inside the tower.
    `;
  }

  if (worldState.towerExterior.toolboxesFound.length > 0) {
    description = `
      Find the rest of the toolboxes!
    `;
  }

  console.log({
    worldState,
    len: worldState.towerExterior.toolboxesFound.length,
  });
  if (worldState.towerExterior.toolboxesFound.length >= TOOLBOX_COUNT_TO_FIND) {
    description = `
      Talk to the Cloud Explorer again.
    `;
  }

  if (worldState.towerExterior.openedPainPointCollector) {
    description = `
      It's time to enter the tower!
    `;
    complete = true;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
}

module.exports = updateQuestStatus;
