#!/usr/bin/env node

const vorpal = require('vorpal')();
var create = require("./modules/create");
var createExpo = require("./modules/createExpo");
var init = require("./modules/init");
var initExpo = require("./modules/initExpo");

var renameProject = function() {
	var oldName = process.argv[3];
	var newName = process.argv[4];
	require("./modules/renameProject.js")(oldName, newName);
};

vorpal
  .command('init <ProjectName>', 'Initializes a NativeBase project.')
  .option('-e, --expos', 'Generate CRNA/Expo App.')
  .action(function(args, callback) {
    if (args.options.expos) {
	createExpo();
    } else {
	create();
    }
    callback();
  });

vorpal
  .command('sample [ProjectName]', 'Loads a sample NativeBase project.')
  .option('-e, --expos', 'Generate CRNA/Expo App.')
  .action(function(args, callback) {
    if (args.options.expos) {
	initExpo();
    } else {
	init();
    }
    callback();
  });

vorpal
  .delimiter('NativeBase->')
  .show();
