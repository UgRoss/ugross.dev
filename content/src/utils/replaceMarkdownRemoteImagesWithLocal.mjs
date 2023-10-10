import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import chalk from 'chalk';
import downloadRemoteImage from './downloadRemoteImage.mjs';

/**
 * This script will download all remote images in a markdown file
 * and replace the remote image links with local image links.
 */
export default async function replaceMarkdownRemoteImagesWithLocal(markdownFilePath) {
  try {
    const markdownDir = path.dirname(markdownFilePath);
    let markdownContent = await readFile(markdownFilePath, 'utf8');

    // Regular expression to match image paths in Markdown
    const imageRegex = /!\[.*?\]\((.*?)\)/g;

    const imagesToCopy = [];
    let match;
    while ((match = imageRegex.exec(markdownContent)) !== null) {
      const imagePath = match[1];

      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        imagesToCopy.push(imagePath);
      }
    }

    if (imagesToCopy.length === 0) {
      console.log(chalk.yellow(`No images found in the ${markdownFilePath}.`));
      return;
    }

    for (const imageUrl of imagesToCopy) {
      const imageName = path.basename(imageUrl);
      const destinationPath = path.join(markdownDir, imageName);

      await downloadRemoteImage(imageUrl, destinationPath);
      console.log(chalk.green(`Downloaded ${imageName} to ${markdownDir}.`));

      markdownContent = markdownContent.replace(imageUrl, imageName);
    }

    await writeFile(markdownFilePath, markdownContent, 'utf8');
    console.log(chalk.green('Updated image paths in the Markdown file.'));
    // console.log(chalk.green('Updated image paths in the Markdown file.'));
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
  }
}
