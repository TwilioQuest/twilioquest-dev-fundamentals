const { existsSync } = require("fs");
const path = require("path");

// https://stackoverflow.com/questions/37521893/determine-if-a-path-is-subdirectory-of-another-in-node-js
function isPathParent(parent, potentialChild) {
  const relative = path.relative(parent, potentialChild);

  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD } = helper.env;
  const newDirPath = helper.getNormalizedInput("newDirPath", {
    lowerCase: false,
  });

  try {
    if (!newDirPath) {
      helper.fail(
        "You need to provide the path to your new directory in the Hack Interface!"
      );
      return;
    }

    if (!existsSync(newDirPath)) {
      helper.fail(
        `TwilioQuest cannot locate a directory at the path you entered, "${newDirPath}".`
      );
      return;
    }

    if (!isPathParent(TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD, newDirPath)) {
      helper.fail(
        `TwilioQuest found your new directory "${newDirPath}", but it should be created within the present working directory you made previously "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD}".`
      );
      return;
    }
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to validate your present working directory.
    
    ${err}`);
    return;
  }

  helper.success("TwiloQuest was able to find your new directory! Good job!", [
    {
      name: "DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR",
      value: newDirPath,
    },
  ]);
};
