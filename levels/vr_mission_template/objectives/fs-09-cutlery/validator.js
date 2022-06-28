module.exports = async function (helper) {
  const { answer1 } = helper.validationFields;

  if (!answer1 || !(answer1 === "/Drawer/Tray/Fork/fork.cutlery")) {
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
