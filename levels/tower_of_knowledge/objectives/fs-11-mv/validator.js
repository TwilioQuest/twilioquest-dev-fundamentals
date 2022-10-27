const { existsSync } = require("fs");

module.exports = async function (helper) {
  const { DEV_FUNDAMENTALS_FILE_SYSTEM_CUTLERY_DRAWER_DIR } = helper.env;

  try {
    // TODO: Check for spoon in correct draw, check for mv in command history
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was validating that the spoon file was moved to the correct directory.
    
    ${err}`);
    return;
  }

  helper.success(
    "You successfully moved the spoon to the correct directory! Nice going!"
  );
};
