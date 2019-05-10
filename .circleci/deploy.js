var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + "/../",
  remoteRoot: process.env.FTPPATH,
  deleteRemote: true,
  include: ["*"],
  exlude: [
    "/node_modules",
    ".gitignore",
    "/.circleci",
    "package - lock.json",
    "package.json",
    "/.git"
  ]
};

ftpDeploy.deploy(config, function(err) {
  if (err) console.log(err);
  else console.log("Uploaded to server");
});