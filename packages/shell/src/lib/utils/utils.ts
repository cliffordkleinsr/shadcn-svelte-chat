import path from 'path';
import { promises as fs, type PathLike } from 'fs'; // Import the promises-based API
async function delay(ms: number | undefined) {
	// Helper function for delay
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function checkDirectoryExists(dirPath: PathLike) {
	try {
		await fs.access(dirPath);
		return true; // Directory exists
	} catch (error) {
		return false; // Directory doesn't exist
	}
}
async function writeComponentFiles(files: any[], baseDir: string) {
	try {
		await fs.mkdir(baseDir, { recursive: true });

		for (const file of files) {
			const filePath = path.join(baseDir, file.name);
			await fs.writeFile(filePath, file.content);
		}
	} catch (error) {
		console.error(`Error writing files to ${baseDir}:`, error);
		throw error;
	}
}
export async function copyItems(sourceDir: string, targetBaseDir: string) {
	try {
		const items = await fs.readdir(sourceDir);
		const copiedItems = [];

		for (const itemName of items) {
			await delay(500); // Small delay before processing each item
			const itemPath = path.join(sourceDir, itemName);
			const stats = await fs.stat(itemPath);

			if (stats.isDirectory()) {
				// For components in subfolders
				const files = [];
				const fileNames = await fs.readdir(itemPath);
				for (const fileName of fileNames) {
					const filePath = path.join(itemPath, fileName);
					const fileContent = await fs.readFile(filePath, 'utf8');
					files.push({
						name: fileName,
						content: fileContent
					});
				}
				const targetDir = path.join(targetBaseDir, itemName);
				await writeComponentFiles(files, targetDir);
				copiedItems.push(itemName);
			} else if (stats.isFile()) {
				// For hooks directly in the hooks folder
				const fileContent = await fs.readFile(itemPath, 'utf8');
				const targetDir = path.join(targetBaseDir); // hooks dir only
				await writeComponentFiles([{ name: itemName, content: fileContent }], targetDir);
				copiedItems.push(itemName);
			}
		}
		return copiedItems;
	} catch (error) {
		console.error(`Error copying :`, error);
		return [];
	}
}
