const fs = require("fs-jetpack");
const path = require("path");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  let fileName = "Drawer/Tray/Spoons/spoon-1.cutlery";
  const { FILE_WORKSPACE_PATH } = helper.env;
  let filePath = path.join(FILE_WORKSPACE_PATH, fileName); // Creating a file by name given in description.md
  let exists = fs.exists(filePath);

  if (!exists) {
    // NOTE: possible spot to check if spoon exists in another directory.
    return helper.fail(`
    You haven't copied the spoons!
    `);
  }

  const hasFileName = lastXCommands(10).filter((x) => x.includes(fileName));
  const hasTouch = hasFileName.filter((x) => x.includes("cp"));

  if (hasTouch.length === 0) {
    // Reset file system here

    return helper.fail(`
    You should move the file with "mv". We'll reset things for you, to try again.
    `);
  }

  helper.success(
    `
    Hooray! You did it!
  `
  );
};
