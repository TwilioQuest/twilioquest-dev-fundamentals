const { existsSync } = require("fs");

module.exports = async function (helper) {
  const { DEV_FUNDAMENTALS_FILE_SYSTEM_CUTLERY_DRAWER_DIR } = helper.env;

  try {
    // TODO: Check for spoon in correct draw, check for mv in command history
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was checking for the copied spoons.
    
    ${err}`);
    return;
  }

  helper.success(
    "TwilioQuest found the copied spoons in the correct drawer directory! Good job!"
  );
};
