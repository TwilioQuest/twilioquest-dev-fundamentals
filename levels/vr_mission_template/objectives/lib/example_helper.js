const fs = require("fs-jetpack");
const shellHistory = require("shell-history");
const homedir = require("os").homedir();

function lastCommand(commandString) {
  const history = shellHistory();
  const endHistory = history[history.length - 1];
  if (endHistory.includes(commandString)) {
    return true;
  }
  return false;
}

function lastXCommands(depth) {
  const history = shellHistory();
  return history.slice(-depth);
}

function dirInHome(name) {
  return fs.find(homedir, {
    matching: name,
    recursive: false,
    directories: true,
  });
}

function fileInHome(name) {
  return fs.find(homedir, { matching: name, recursive: false });
}

module.exports = {
  lastCommand,
  lastXCommands,
  dirInHome,
  fileInHome,
};
