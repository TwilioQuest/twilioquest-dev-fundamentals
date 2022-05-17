module.exports = async function (helper) {
  const { answer1, answer2 } = helper.validationFields;

  if (!answer1 || !(answer1 === "/One/Level/Deeper")) {
    return helper.fail(`
      The answer to the first question is incorrect.
    `);
  }
  if (!answer2 || !(answer2 === "/One/Level")) {
    return helper.fail(`
      The answer to the second question is incorrect.
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
