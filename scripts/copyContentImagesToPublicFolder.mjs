import { readdir, copyFile } from 'fs/promises';
import { emptyDir } from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

const targetDir = './public/content-images/';
const postsDir = './content/posts';
const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

async function copyImagesToTargetDir({ images, imagesDirPath, targetDirPath }) {
  for (const image of images) {
    await copyFile(`${imagesDirPath}/${image}`, `${targetDirPath}${image}`);
  }
}

async function createPostImageFoldersForCopy() {
  const postsFoldersNames = (await readdir(postsDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const postFolderName of postsFoldersNames) {
    const postDirPath = `${postsDir}/${postFolderName}`;

    const postDirFiles = await readdir(postDirPath);
    const images = postDirFiles.filter((file) =>
      allowedImageFileExtensions.includes(path.extname(file))
    );

    if (images.length) {
      await copyImagesToTargetDir({
        images,
        imagesDirPath: postDirPath,
        targetDirPath: targetDir,
      });
    }
  }
}

await emptyDir(targetDir);
await createPostImageFoldersForCopy();

console.log(chalk.blue('==============================================='));
console.log(chalk.green('✅  Posts images have been successfully copied!'));
console.log(chalk.blue('==============================================='));
