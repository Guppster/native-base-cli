var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;
var path = require("path");
var tools = require("./tool");

module.exports = 
	function initExpo() 
	{
		var initProcess = spawnSync(
			"git",
			["clone", "-b", "Expo", "git@github.com:GeekyAnts/native-base-boilerplate.git"],
			{
				stdio: "inherit",
			}
		);

		var packageInstall = getYarnVersionIfAvailable("native-base-boilerplate");

		var removeGit = spawnSync("rm", ["-rf", ".git"], {
			cwd: path.join(process.cwd(), "native-base-boilerplate"),
			stdio: "inherit",
		});
	};

function init() 
{
	var initProcess = spawnSync("git", ["clone", "git@github.com:GeekyAnts/native-base-boilerplate.git"], {
		stdio: "inherit",
	});

	var packageInstall = getYarnVersionIfAvailable("native-base-boilerplate");

	var removeGit = spawnSync("rm", ["-rf", ".git"], {
		cwd: path.join(process.cwd(), "native-base-boilerplate"),
		stdio: "inherit",
	});
};
