var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;
var path = require("path");

module.exports = 
	function getYarnVersionIfAvailable(name) {
		var yarnVersion;
		try {
			// execSync returns a Buffer -> convert to string
			if (process.platform.startsWith("win")) {
				yarnVersion = (execSync("yarn --version").toString() || "").trim();
			} else {
				yarnVersion = (execSync("yarn --version 2>/dev/null").toString() || "").trim();
			}
		} catch (error) {
			return null;
		}
		if (yarnVersion) yarnInstall(name);
		else npmInstall(name);
	}

	function yarnInstall(name) {
		spawnSync("yarn", ["install"], {
			cwd: path.join(process.cwd(), name),
			stdio: "inherit",
		});
	}

	function npmInstall(name) {
		spawnSync("npm", ["install"], {
			cwd: path.join(process.cwd(), name),
			stdio: "inherit",
		});
	}


