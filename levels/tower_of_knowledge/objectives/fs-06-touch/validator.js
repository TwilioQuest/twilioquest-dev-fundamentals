const { existsSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR } = helper.env;
  const newFileName = helper.getNormalizedInput("newFileName", {
    lowerCase: false,
  });
  const newFilePath = path.join(
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    newFileName
  );

  try {
    if (!newFileName) {
      helper.fail("You must provide the name of your newly created file!");
      return;
    }

    if (!existsSync(newFilePath)) {
      helper.fail(
        `TwilioQuest could not find the file "${newFileName}" in "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"! Make sure your newly created file is in the right directory!`
      );
      return;
    }
  } catch (err) {
    helper.fail(
      `TwilioQuest ran into an issue when checking for your newly created file!
      
      ${err}`
    );
    return;
  }

  helper.success(
    "TwilioQuest was able to find your newly created file! Good job!",
    [
      {
        name: "DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE",
        value: newFilePath,
      },
    ]
  );
};
