const fs = require("fs-jetpack");
const { lastXCommands } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const { answer1 } = helper.validationFields;

  if (!answer1) {
    return helper.fail(`
    Please provide a path for your new directory!
    `);
  }

  const splitPath = answer1.split("/");
  const dirName = splitPath[splitPath.length - 1];
  const exists = fs.exists(answer1);

  if (!exists) {
    return helper.fail(`
    That path doesn't exist! Check your path with "pwd".
    `);
  } else if (exists !== "dir") {
    return helper.fail(`
    That's not a directory path, have you included a file?
    `);
  }

  const hasDirName = lastXCommands(10).filter((x) => x.includes(dirName));
  const hasMkDir = hasDirName.filter((x) => x.includes("mkdir"));

  if (hasMkDir.length === 0) {
    return helper.fail(`
    The directory should be one you created with "mkdir".
    `);
  }

  helper.success(
    `
    Hooray! You did it!
  `,
    [
      {
        name: "FILE_WORKSPACE_PATH",
        value: answer1,
      },
    ]
  );
};
