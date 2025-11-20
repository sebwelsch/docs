const fs = require('node:fs');
const path = require('node:path');
const redirects = [
  'https://docs.criipto.io/*  https://docs.idura.app/:splat  301!'
];

exports.onPostBuild = ({ reporter, basePath, pathPrefix }) => {
  const redirectsPath = path.resolve(`${__dirname}/../../public/_redirects`);
  console.log(redirectsPath);
  console.log(fs.readFileSync(redirectsPath, 'utf-8'));
  const input = fs.readFileSync(redirectsPath, 'utf-8');
  const output = `${input}\n${redirects.join('\n')}`;
  fs.writeFileSync(redirectsPath, output);
}