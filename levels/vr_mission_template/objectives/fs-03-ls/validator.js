const { fileInHome, dirInHome } = require("../lib/example_helper.js");

module.exports = async function (helper) {
  const { answer1, answer2 } = helper.validationFields;

  if (!answer1 || !answer2) {
    return helper.fail(`
    Please provide an answer for both questions!
    `);
  }

  const dirFound = dirInHome(answer1);
  const fileFound = fileInHome(answer2);
  const fileMix = dirInHome(answer2);
  const dirMix = fileInHome(answer1);

  if (dirFound.length === 0) {
    if (dirMix.length > 0) {
      return helper.fail(`
        You gave a file name instead of a directory name! Try again.
        `);
    }
    return helper.fail(`
      There doesn't appear to be a directory named ${answer1}. Take another look by opening a new terminal and typing "ls".
    `);
  }

  if (fileFound.length === 0) {
    if (fileMix.length > 0) {
      return helper.fail(`
        You gave a directory name instead of a file name! Try again.
        `);
    }
    return helper.fail(`
      There doesn't appear to be a file named ${answer2}. Take another look by opening a new terminal and typing "ls".
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
