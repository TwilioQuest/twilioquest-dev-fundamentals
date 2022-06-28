const { lastCommand } = require("../lib/example_helper.js");

module.exports = async function (helper) {

  if (!commandInHistory("pwd")) {
    return helper.fail(`
      Have you run the command "pwd" in your terminal?
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
