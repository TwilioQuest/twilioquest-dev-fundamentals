module.exports = function viewTower(world) {
  world.forEachEntities("viewpoint_tv", async (viewpoint) => {
    world.disablePlayerMovement();

    await world.tweenCameraToPosition({
      x: viewpoint.startX,
      y: viewpoint.startY,
    });

    world.startConversation("librarianFileSystem", "Librarian.png");

    // await world.wait(3000);
    await world.tweenCameraToPlayer();

    world.enablePlayerMovement();
  });
};
