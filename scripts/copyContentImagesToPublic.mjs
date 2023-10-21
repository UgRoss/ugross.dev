import { emptyDir, copy } from 'fs-extra';
import path from 'path';

const imagesFolderName = 'content-images';
const imagesDir = path.resolve(process.cwd(), 'content', imagesFolderName);
const targetDir = path.resolve(process.cwd(), 'public', imagesFolderName);

emptyDir(path.resolve(targetDir));

await copy(imagesDir, targetDir);
