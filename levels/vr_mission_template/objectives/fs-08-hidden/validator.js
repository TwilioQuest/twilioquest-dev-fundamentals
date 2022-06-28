const fs = require("fs-jetpack");
const path = require("path");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const fileName = "sneaky.js"; // except in Windows
  const { FILE_WORKSPACE_PATH } = helper.env;
  const filePath = path.join(FILE_WORKSPACE_PATH, "." + fileName); // Creating a file by name given in description.md
  const notHidden = path.join(FILE_WORKSPACE_PATH, fileName);
  const exists = fs.exists(filePath);

  const { answer1 } = helper.validationFields;

  if (!answer1 || answer1 !== "ls -a") {
    return helper.fail(`
      What's the "ls" command to reveal a hidden file?
    `);
  }

  if (!exists) {
    if (fs.exists(notHidden)) {
      // Thanks VJ <3
      return helper.fail(`
      You've created a file, but the programming oracle can see it! It's time to go sneaky and create a hidden file full of secrets that nobody* can see! Try the "." prefix.
        `);
    }
    return helper.fail(`
    Did you create your hidden file?
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
