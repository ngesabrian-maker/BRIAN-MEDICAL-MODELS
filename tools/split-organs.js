import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const organsPath = path.join(rootDir, 'src', 'organs.js');
const systemsDir = path.join(rootDir, 'src', 'data', 'systems');

if (!fs.existsSync(organsPath)) {
  throw new Error(`Missing source file: ${organsPath}`);
}

const raw = fs.readFileSync(organsPath, 'utf8');
const match = raw.match(/export\s+const\s+SYSTEMS\s*=\s*(\[[\s\S]*?\]);?\s*$/);

if (!match) {
  throw new Error('Could not find the SYSTEMS export in src/organs.js');
}

const SYSTEMS = Function(`"use strict"; return (${match[1]});`)();

fs.mkdirSync(systemsDir, { recursive: true });

const imports = [];
const exportList = [];

for (const system of SYSTEMS) {
  const id = system && system.id ? String(system.id) : null;
  if (!id) continue;

  const safeName = `${id.replace(/[^a-zA-Z0-9_$]/g, '_')}System`;
  const filePath = path.join(systemsDir, `${id}.js`);
  const content = `export const ${safeName} = ${JSON.stringify(system, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');

  imports.push(`import { ${safeName} } from "./data/systems/${id}.js";`);
  exportList.push(safeName);
}

const wrapper = `${imports.join('\n')}\n\nexport const SYSTEMS = [\n  ${exportList.join(',\n  ')}\n];\n`;
fs.writeFileSync(organsPath, wrapper, 'utf8');

console.log(`Split ${SYSTEMS.length} systems into ${path.join('src', 'data', 'systems')}`);
