module.exports = async function (helper) {
  const { answer1 } = helper.validationFields;

  if (!answer1 || !(answer1 === "/Path/To/Test/file.js")) {
    // Check Windows paths

    // Check specifics of the path
    // Beginning slash, capitlisation, file extensions
    return helper.fail(`
      The answer to the first question is incorrect.
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
