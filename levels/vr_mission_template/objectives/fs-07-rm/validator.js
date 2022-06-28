const fs = require("fs-jetpack");
const path = require("path");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const fileName = "test.js";
  const { FILE_WORKSPACE_PATH } = helper.env;
  const filePath = path.join(FILE_WORKSPACE_PATH, fileName); // Creating a file by name given in description.md
  const exists = fs.exists(filePath);

  if (exists) {
    return helper.fail(`
    The file still exists! Did you run touch "rm test.js"?
    `);
  }

  const hasFileName = lastXCommands(10).filter((x) => x.includes(fileName));
  const hasRm = hasFileName.filter((x) => x.includes("rm"));

  if (hasRm.length === 0) {
    return helper.fail(`
    You should have removed the file with "rm".
    `);
  }

  helper.success(
    `
    Hooray! You did it!
  `
  );
};
