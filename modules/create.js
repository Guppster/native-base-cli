var spawnSync = require("child_process").spawnSync;
var execSync = require("child_process").execSync;
var path = require("path");
var tools = require("./tool");

module.exports = 
	function create(name) {
	spawnSync("react-native", ["init", name], {
		stdio: "inherit",
	});

	process.chdir('/' + name);

	spawnSync("npm", ["install", "--save"], {
                        cwd: path.join(process.cwd(), name),
                        stdio: "inherit",
                });


	spawnSync("react-native", ["link"], {
		stdio: "inherit",
	});
};
