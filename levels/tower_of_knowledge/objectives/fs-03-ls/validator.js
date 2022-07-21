const { existsSync } = require("fs");
const path = require("path");

// NOTE: There is a theoretical softlock state on this validator
// if the user picked a present working directory in the previous
// objective that has no files or directories within it.
//
// This should be unlikely, as most terminals are going to open to
// a home directory.
//
// If this does happen, we could guide the user to fix this problem
// by changing their TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD to a new
// directory that actually does contain files and/or directories.

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD } = helper.env;
  const directoryOrFileName = helper.getNormalizedInput("directoryOrFileName", {
    lowerCase: false,
  });
  let absolutePathToDirOrFile;

  try {
    if (!directoryOrFileName) {
      helper.fail(
        "You need to provide the name of a directory or file in the Hack Interface!"
      );
      return;
    }

    absolutePathToDirOrFile = path.join(
      TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD,
      directoryOrFileName
    );

    if (!existsSync(absolutePathToDirOrFile)) {
      helper.fail(
        `TwilioQuest cannot locate the directory or file you entered, "${directoryOrFileName}", in your earlier entered present working directory "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD}".`
      );
      return;
    }
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to validate your present working directory.
    
    ${err}`);
    return;
  }

  helper.success(
    `TwiloQuest was able to find your file or directory at the path "${absolutePathToDirOrFile}". Well done!`
  );
};
