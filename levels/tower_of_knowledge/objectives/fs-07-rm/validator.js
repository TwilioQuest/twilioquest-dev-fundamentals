const { existsSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const {
    DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE,
  } = helper.env;
  const newFilePath = path.join(
    DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE
  );

  try {
    if (existsSync(newFilePath)) {
      helper.fail(
        `"${DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE}" still exists in your "${DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}" directory! Make sure to delete the file with "rm"!`
      );
      return;
    }
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was checking for the deletion of "${DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE}".
    
    ${err}`);
    return;
  }

  helper.success(
    "TwiloQuest was able to confirm that your file was deleted. Great Work!"
  );
};
