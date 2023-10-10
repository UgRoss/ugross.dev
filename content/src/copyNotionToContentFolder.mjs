import 'dotenv/config';
import { emptyDir, pathExists } from 'fs-extra';
import chalk from 'chalk';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';
import YAML from 'yaml';
import notionToMarkdown from './notion/notionToMarkdown.mjs';
import replaceMarkdownRemoteImagesWithLocal from './utils/replaceMarkdownRemoteImagesWithLocal.mjs';
import { getAllPostsFromNotion } from './notion/content/posts.mjs';
import { getAllTILsFromNotion } from './notion/content/tils.mjs';

// Copy blog posts
const posts = await getAllPostsFromNotion();
const targetDir = path.join(process.cwd(), 'blog');

await emptyDir(targetDir);

console.log(chalk.blue(`-------- POSTS --------`));
posts.forEach(async (page) => {
  const mdBlocks = await notionToMarkdown.pageToMarkdown(page.id);
  const mdStringObj = notionToMarkdown.toMarkdownString(mdBlocks);
  const mdString = mdStringObj.parent;
  // create MD File

  await mkdir(path.join(targetDir, page.slug));
  console.log(chalk.green(`Created ${page.title} folder`));

  const targetFilePath = path.join(targetDir, page.slug, `index.md`);
  const mdFileValue = `---\n${YAML.stringify(page)}\n---\n${mdString}`;

  await writeFile(targetFilePath, mdFileValue);
  console.log(chalk.green(`Copied ${page.title} to ${targetFilePath}`));

  await replaceMarkdownRemoteImagesWithLocal(targetFilePath);
});
console.log(chalk.blue(`-------- FINISHED POSTS --------`));

const tilItems = await getAllTILsFromNotion();
const tilTargetDir = path.join(process.cwd(), 'til');
const tilAlreadyCreated = await pathExists(tilTargetDir);

if (!tilAlreadyCreated) {
  await mkdir(tilTargetDir);
} else {
  await emptyDir(tilTargetDir);
}

tilItems.forEach(async (tilPage) => {
  const mdBlocks = await notionToMarkdown.pageToMarkdown(tilPage.id);
  const mdStringObj = notionToMarkdown.toMarkdownString(mdBlocks);
  const mdString = mdStringObj.parent;
  // create MD File

  await mkdir(path.join(tilTargetDir, tilPage.slug));
  console.log(chalk.green(`Created ${tilPage.title} folder`));

  const targetFilePath = path.join(tilTargetDir, tilPage.slug, `index.md`);
  const mdFileValue = `---\n${YAML.stringify(tilPage)}\n---\n${mdString}`;

  await writeFile(targetFilePath, mdFileValue);
  console.log(chalk.green(`Copied ${tilPage.title} to ${targetFilePath}`));

  await replaceMarkdownRemoteImagesWithLocal(targetFilePath);
});
