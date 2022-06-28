const fs = require("fs-jetpack");
const path = require("path");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const { FILE_WORKSPACE_PATH } = helper.env;

  let filePath = path.join(FILE_WORKSPACE_PATH, "Drawer");

  // Check Drawer exists

  if (!fs.exists(filePath)) {
    helper.fail(`You haven't created the drawer!`);
  }

  // Check Tray exists

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray");

  if (!fs.exists(filePath)) {
    helper.fail(`You haven't created the tray!`);
  }

  // Check Knives exists

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Knives");

  if (!fs.exists(filePath)) {
    helper.fail(`You haven't created the knives!`);
  }

  // Check Forks exists

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Forks");

  if (!fs.exists(filePath)) {
    helper.fail(`You haven't created the forks!`);
  }

  // Check Spoons exists

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Spoons");

  if (!fs.exists(filePath)) {
    helper.fail(`You haven't created the spoons!`);
  }

  // Check fork.cutlery
  // Check is file, not dir

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Forks/fork.cutlery");
  let exists = fs.exists(filePath);

  if (!exists) {
    helper.fail(`You haven't created fork.cutlery!`);
  } else if (exists !== "file") {
    helper.fail(`fork.cutlery is not a file! rm it and try again`);
  }

  // Check spoon.cutlery
  // Check is file, not dir

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Forks/spoon.cutlery");
  exists = fs.exists(filePath);

  if (!exists) {
    helper.fail(`You haven't created spoon.cutlery!`);
  } else if (exists !== "file") {
    helper.fail(`spoon.cutlery is not a file! rm it and try again`);
  }

  // Check knife.cutlery
  // Check is file, not dir

  filePath = path.join(FILE_WORKSPACE_PATH, "Drawer/Tray/Knife/knife.cutlery");
  exists = fs.exists(filePath);

  if (!exists) {
    helper.fail(`You haven't created knife.cutlery!`);
  } else if (exists !== "file") {
    helper.fail(`knife.cutlery is not a file! rm it and try again`);
  }

  // NOTE: not currently checking for command history due to the possible complexity of command history for this objective and picking which commands to find.

  helper.success(
    `
    Hooray! You did it!
  `
  );
};
