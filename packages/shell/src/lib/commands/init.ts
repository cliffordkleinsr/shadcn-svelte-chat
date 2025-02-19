import { Command } from 'commander';
import prompts from 'prompts';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';
import { checkDirectoryExists, copyItems } from '../utils/utils.js';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const init = new Command()
	.name('init')
	.description('Add chat components and hooks to your project')
	.action(async () => {
		try {
			const spinner = ora();

			const confirmResponse = await prompts({
				type: 'confirm',
				name: 'init',
				message: "This will install chat components and hooks to the '$lib' directory. Proceed?",
				initial: false
			});

			if (!confirmResponse.init) {
				console.log(chalk.yellow('Installation cancelled.'));
				return;
			}

			const sourceComponentsDir = path.join(__dirname, '..', 'template', 'chat');
			const sourceHooksDir = path.join(__dirname, '..', 'template', 'hooks');

			const targetComponentsDir = path.join(
				process.cwd(),
				'src',
				'lib',
				'components',
				'ui',
				'chat'
			);
			const targetHooksDir = path.join(process.cwd(), 'src', 'lib', 'hooks');

			// Check if directories already exist before copying components and hooks
			// --- Corrected Logic for Checking and Copying ---
			const componentsExist = await checkDirectoryExists(targetComponentsDir);
			const hooksExist = await checkDirectoryExists(targetHooksDir);

			spinner.start('Copying components...');
			const copiedComponents = componentsExist
				? []
				: await copyItems(sourceComponentsDir, targetComponentsDir); // Pass 'components' type
			spinner.succeed(
				`Components ${copiedComponents.length > 0 ? copiedComponents.join(', ') : componentsExist ? 'already exist' : 'not'} found and copied.`
			); // Correct message

			spinner.start('Copying hooks...');
			const copiedHooks = await copyItems(sourceHooksDir, targetHooksDir); // Pass 'hooks' type
			spinner.succeed(
				`Hooks ${copiedHooks.length > 0 ? copiedHooks.join(', ') : 'not'} found and cloned.`
			); // Correct message

			const templateDir = path.join(__dirname, '..', 'template');
			const targetLibDir = path.join(process.cwd(), 'src', 'lib');
			const filesToCopy = ['index.js', 'types.d.ts'];

			// Check for existing index.ts and remove it if it exists
			const existingIndexPath = path.join(targetLibDir, 'index.ts');
			try {
				await fs.access(existingIndexPath); // Check if index.ts exists
				await fs.unlink(existingIndexPath); // Remove index.ts
				console.log(chalk.yellow('Removed existing index.ts'));
			} catch (err) {
				// index.ts doesn't exist, so do nothing
			}

			spinner.start('Copying entry points...');
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

			if (copiedComponents.length === 0 && copiedHooks.length === 0 && filesToCopy.length === 0) {
				console.log(chalk.yellow("No components or hooks found in the 'template' directories."));
				return;
			}

			console.log(chalk.green('Components and hooks have been successfully installed.'));
		} catch (error) {
			console.error(chalk.red('An error occurred:', error));
		}
	});
