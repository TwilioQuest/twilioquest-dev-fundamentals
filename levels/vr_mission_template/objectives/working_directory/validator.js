const jetpack = require("fs-jetpack");

module.exports = async (helper) => {
  const { workspacePath } = helper.validationFields;

  if (!workspacePath) {
    helper.fail(`
      Please provide a path to your workspace directory!
    `);
  }

  const exists = await jetpack.existsAsync(workspacePath);
  if (!exists) {
    helper.fail(`
      We couldn't find a directory at the path you provided. 
      Please double check that the directory path you pasted in 
      the text field is correct.
    `);
  }

  helper.success(
    `
    Workspace confirmed.
  `,
    [
      {
        name: "FILE_WORKSPACE_PATH",
        value: workspacePath,
      },
    ]
  );
};
