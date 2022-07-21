const { existsSync } = require("fs");

module.exports = async function (helper) {
  const pwd = helper.getNormalizedInput("pwd", {
    lowerCase: false,
  });

  try {
    if (!pwd) {
      helper.fail(
        "You need to provide your present working directory in the Hack Interface!"
      );
      return;
    }

    if (!existsSync(pwd)) {
      helper.fail(
        `TwilioQuest cannot locate the path you entered, "${pwd}", on your computer.`
      );
      return;
    }
  } catch (err) {
    helper.fail(`An error occurred while TwilioQuest was trying to validate your present working directory.
    
    ${err}`);
    return;
  }

  helper.success(
    "TwiloQuest was able to verify your present working directory! Well done!",
    [
      {
        name: "DEV_FUNDAMENTALS_FILE_SYSTEM_PWD",
        value: pwd,
      },
    ]
  );
};
