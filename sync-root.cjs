const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist! Run vite build first.');
  process.exit(1);
}

// Copy items from dist to root so the root directory itself is a valid static deployment
const itemsToCopy = [
  'index.html',
  'assets',
  'favicon.svg',
  'icons.svg',
  'sachin_avatar.jpg',
  'sachin_hero_full.jpg',
  'sachin_work',
  '_redirects'
];

for (const item of itemsToCopy) {
  const src = path.join(distDir, item);
  const dest = path.join(rootDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true, force: true });
    console.log(`Synced ${item} -> root`);
  }
}

console.log('Root directory successfully synchronized for direct static hosting!');
