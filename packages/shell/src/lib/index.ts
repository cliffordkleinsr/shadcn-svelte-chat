#!/usr/bin/env node
import { Command } from 'commander';
import { init } from './commands/init.js';
import fs from 'fs-extra';
import path from 'path';
// const pkg = require('../../package.json')

const packageJsonPath = path.join('package.json');

const pkg = fs.readJSONSync(packageJsonPath);
async function main() {
	const version = pkg.version;

	const program = new Command();
	program
		.name('shadcn-chat-cli')
		.description('CLI for adding chat components to your project')
		.version(version);

	program.addCommand(init);

	program.parse(process.argv);
}

main();
