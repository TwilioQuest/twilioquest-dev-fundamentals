const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { existsSync, lstatSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR } = helper.env;
  const os = process.platform;
  // Differentiating between the need for a "." and not, to further highlight the differences between
  // OS's and their "hidden file conventions"
  const newFileName = os === "win32" ? "sneaky.txt" : ".sneaky.txt";
  const newFilePath = path.join(
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    newFileName
  );

  try {
    if (!existsSync(newFilePath)) {
      if (os !== "win32") {
        const visibleNixFileName = "sneaky.txt";
        const visibleNixFilePath = path.join(
          TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
          visibleNixFileName
        );

        if (existsSync(visibleNixFilePath)) {
          helper.fail(
            `TwilioQuest found your file, but it isn't hidden! Make sure the file has a period at the beginning of it's name! For example, .myFile.txt.`
          );
          return;
        }
      }

      helper.fail(
        `TwilioQuest could not find "${newFileName}" in "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"! Double check that your file is in the correct directory and that there are no typos in the name!`
      );
      return;
    }

    const fileStats = lstatSync(newFilePath);

    if (!fileStats.isFile()) {
      helper.fail(
        `TwilioQuest found "${newFileName}" in "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}", but it isn't a file! Double check that you're using the right command when making your file!`
      );
      return;
    }

    if (os === "win32") {
      const { stdout } = await exec("powershell.exe (ls -ah).Name", {
        cwd: TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
      });

      if (!stdout.includes(newFileName)) {
        helper.fail(
          'TwilioQuest found your file, but it isn\'t hidden! Make sure to hide your file using the "attrib" command with the "+h" option!'
        );
        return;
      }
    }
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to check your present working directory for "${newFileName}".
    
    ${err}`);
    return;
  }

  helper.success(
    "TwiloQuest was able to find the sneaky hidden file! Great job!"
  );
};
