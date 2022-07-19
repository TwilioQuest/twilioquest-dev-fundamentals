module.exports = async function (helper) {
  try {
    helper.fail(
      "This objective is hard coded to fail! It's not yet been implemented!"
    );
    return;
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
