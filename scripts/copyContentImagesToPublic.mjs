import { emptyDir, copy, exists } from 'fs-extra';
import path from 'path';

const imagesFolderName = 'content-images';
const imagesDir = path.resolve(process.cwd(), 'content', imagesFolderName);
const targetDir = path.resolve(process.cwd(), 'public', imagesFolderName);

if (exists(targetDir)) {
  await emptyDir(path.resolve(targetDir));
}

await copy(imagesDir, targetDir);
