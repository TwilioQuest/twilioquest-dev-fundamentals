module.exports = function viewTower(world) {
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
};
