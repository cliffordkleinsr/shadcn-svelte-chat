import { Command } from 'commander';
import prompts from 'prompts';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import { copyItems } from '../utils/utils.js';
import { promises as fs } from 'fs';

export const init = new Command()
	.name('init')
	.description('Add chat components and hooks to your project')
	.action(async () => {
		try {
			const spinner = ora();

			const confirmResponse = await prompts({
				type: 'confirm',
				name: 'init',
				message:
					"This will install chat components and hooks from 'template' to the '$lib' directory. Proceed?",
				initial: false
			});

			if (!confirmResponse.init) {
				console.log(chalk.yellow('Installation cancelled.'));
				return;
			}

			const sourceComponentsDir = path.join(__dirname, '..', 'template', 'chat');
			const sourceHooksDir = path.join(__dirname, '..', 'template', 'hooks');

			// Define target directories
			const targetComponentsDir = path.join(
				process.cwd(),
				'src',
				'lib',
				'components',
				'ui',
				'chat'
			);
			const targetHooksDir = path.join(process.cwd(), 'src', 'lib', 'hooks');

			spinner.start('Cloning components...');
			const copiedComponents = await copyItems(sourceComponentsDir, targetComponentsDir); // Pass targetComponentsDir
			spinner.succeed(
				`Components ${copiedComponents.length > 0 ? copiedComponents.join(', ') : 'not'} found and cloned.`
			);

			spinner.start('Cloning hooks...');
			const copiedHooks = await copyItems(sourceHooksDir, targetHooksDir); // Pass targetHooksDir
			spinner.succeed(
				`Hooks ${copiedHooks.length > 0 ? copiedHooks.join(', ') : 'not'} found and cloned.`
			);

			const templateDir = path.join(__dirname, '..', 'template');
			const targetLibDir = path.join(process.cwd(), 'src', 'lib');
			const filesToCopy = ['index.ts', 'types.d.ts'];

			spinner.start('Cloning entry points...');
			for (const file of filesToCopy) {
				const sourcePath = path.join(templateDir, file);
				const targetPath = path.join(targetLibDir, file);

				try {
					await fs.copyFile(sourcePath, targetPath);
					console.log(chalk.green(`Copied ${file}`));
				} catch (error) {
					console.error(chalk.red(`Error copying ${file}:`, error));
				}
			}
			spinner.succeed(`${filesToCopy.length} Entrypoints found and cloned.`);
			if (copiedComponents.length === 0 && copiedHooks.length === 0) {
				console.log(chalk.yellow("No components or hooks found in the 'template' directories."));
				return;
			}

			console.log(chalk.green('Components and hooks have been successfully installed.'));
		} catch (error) {
			console.error(chalk.red('An error occurred:', error));
		}
	});
