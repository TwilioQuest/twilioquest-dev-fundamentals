const { existsSync, lstatSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR } = helper.env;
  // Differentiating between the need for a "." and not, to further highlight the differences between
  // OS's and their "hidden file conventions"
  const newFileName =
    process.platform === "win32" ? "sneaky.txt" : ".sneaky.txt";
  const newFilePath = path.join(
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    newFileName
  );

  try {
    if (!existsSync(newFilePath)) {
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
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to check your present working directory for "${newFileName}".
    
    ${err}`);
    return;
  }

  helper.success(
    "TwiloQuest was able to find the sneaky hidden file! Great job!"
  );
};
