const { existsSync } = require("fs");

module.exports = async function (helper) {
  const cutleryDrawerDirPath = helper.getNormalizedInput(
    "cutleryDrawerDirPath",
    {
      lowerCase: false,
    }
  );

  try {
    if (!cutleryDrawerDirPath) {
      helper.fail(
        "You need to provide the path to your cutlery drawer directory in the Hack Interface!"
      );
      return;
    }

    if (!existsSync(cutleryDrawerDirPath)) {
      helper.fail(
        `TwilioQuest could not locate the cutlery drawer directory at the path you entered, "${cutleryDrawerDirPath}".`
      );
      return;
    }

    // TODO: Add checks for commands improperly followed, file system not created, partial path, case sensitivity,
    // and separators once the predefined directory entries for this objective have been determined
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to validate your cutlery drawer directory.
    
    ${err}`);
    return;
  }

  helper.success(
    "Your cutlery drawer directory looks clean and organized. Great job!"
  );
};
