#!/usr/bin/env node
import { Command } from 'commander';
import { init } from './commands/init.js';
import pkg from '../../package.json' with { type: 'json' };

async function main() {
	const version = pkg.version;

	const program = new Command();
	program
		.name('shadcn-sv-chat-cli')
		.description('CLI for adding chat components to your project')
		.version(version);

	program.addCommand(init);

	program.parse(process.argv);
}

main();
