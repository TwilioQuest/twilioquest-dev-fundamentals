const fs = require("fs-jetpack");
const path = require("path");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const fileName = "test.js";
  const { FILE_WORKSPACE_PATH } = helper.env;
  const filePath = path.join(FILE_WORKSPACE_PATH, fileName); // Creating a file by name given in description.md
  const exists = fs.exists(filePath);

  if (!exists) {
    return helper.fail(`
    That file doesn't exist! Did you run touch "test.js"?
    `);
  } else if (exists !== "file") {
    return helper.fail(`
    It looks like you may have created a directory! uh oh.
    `);
  }

  const hasFileName = lastXCommands(10).filter((x) => x.includes(fileName));
  const hasTouch = hasFileName.filter((x) => x.includes("touch"));

  if (hasTouch.length === 0) {
    return helper.fail(`
    The file should be one you created with "touch".
    `);
  }

  helper.success(
    `
    Hooray! You did it!
  `
  );
};
