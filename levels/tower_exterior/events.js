// viewpoint_tower
const merge = require("lodash.merge");

const WORLD_STATE_KEY = "com.twilioquest.developer-fundamentals";

const INITIAL_STATE = {};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === "playerDidInteract" && event.target.key === "telescope") {
    world.forEachEntities("viewpoint_tower_door", async (viewpoint) => {
      world.disablePlayerMovement();

      await world.tweenCameraToPosition({
        x: viewpoint.startX,
        y: viewpoint.startY,
      });
      world.forEachEntities("viewpoint_tower", async (viewpoint) => {
        await world.tweenCameraToPosition(
          {
            x: viewpoint.startX,
            y: viewpoint.startY,
          },
          { duration: 5000 }
        );
        await world.wait(3000);
        world.forEachEntities("viewpoint_tower_door", async (viewpoint) => {
          await world.tweenCameraToPosition(
            {
              x: viewpoint.startX,
              y: viewpoint.startY,
            },
            { duration: 5000 }
          );
          await world.tweenCameraToPlayer();

          world.enablePlayerMovement();
        });
      });
    });
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
