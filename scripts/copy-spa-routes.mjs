// GitHub Pages is a static host: requesting a client-side route directly
// (e.g. /clippy/privacy-policy) returns 404 unless a real file exists there.
// Copy the built index.html into a folder for every route so deep links work.
import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const routes = ['privacy-policy'];

const distDir = resolve('dist');
const indexFile = resolve(distDir, 'index.html');

for (const route of routes) {
  const routeDir = resolve(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexFile, resolve(routeDir, 'index.html'));
}
