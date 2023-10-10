import axios from 'axios';
import { createWriteStream } from 'fs';

export default async function downloadRemoteImage(imageUrl, destinationPath) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const writer = createWriteStream(destinationPath);

    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      writer.on('finish', () => resolve(destinationPath));
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Error downloading remote image: ${error.message}`);
  }
}
