/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// in gatsby-node.js
import fs from 'fs'; // native
import zlib from 'zlib'; // native
import path from 'path'; // native
import glob from 'glob'; // https://www.npmjs.com/package/glob

export default function postBuild (pages, callback) {
  const publicPath = path.join(__dirname, 'public');
  const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css)`);
  gzippable.forEach((file) => {
    const content = fs.readFileSync(file);
    const zipped = zlib.gzipSync(content);
    fs.writeFileSync(`${file}.gz`, zipped);
  });
  callback();
}
