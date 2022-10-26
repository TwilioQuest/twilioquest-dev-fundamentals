const { existsSync } = require("fs");

module.exports = async function (helper) {
  const filePath = helper.getNormalizedInput("filePath", {
    lowerCase: false,
  });

  try {
    if (!filePath) {
      helper.fail(
        'You need to provide the path to the "fork" file in the Hack Interface!'
      );
      return;
    }

    if (!existsSync(filePath)) {
      helper.fail(
        `TwilioQuest could not find the "fork" file at the path you entered, "${newDirPath}".`
      );
      return;
    }

    // TODO: add checks for partial path, case sensitivity, and separators once the predefined path for this objective
    // has been determined
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to validate the path to gave to the "fork" file.
    
    ${err}`);
    return;
  }

  helper.success(
    'TwiloQuest was able to find the "fork" file at the path you provided! Good job!'
  );
};
