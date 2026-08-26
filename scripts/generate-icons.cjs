const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const pngToIco = require('png-to-ico');

(async () => {
  try {
    const repoRoot = path.join(__dirname, '..');
    const iconsDir = path.join(repoRoot, 'src-tauri', 'icons');
    const srcImage = path.join(iconsDir, '254.jpg');

    if (!fs.existsSync(srcImage)) {
      console.error('Source image not found:', srcImage);
      process.exit(2);
    }

    // Sizes we'll generate
    const sizes = [32, 128, 256, 512];
    console.log('Generating PNGs in', iconsDir);

    const pngBuffers = {};
    for (const size of sizes) {
      const img = await Jimp.read(srcImage);
      img.cover(size, size); // scale and crop to cover
      const outName = size === 32 ? '32x32.png' : size === 128 ? '128x128.png' : `icon_${size}.png`;
      const outPath = path.join(iconsDir, outName);
      await img.writeAsync(outPath);
      console.log('Wrote', outPath);
      const buf = await img.getBufferAsync(Jimp.MIME_PNG);
      pngBuffers[size] = buf;
    }

    // Also create 128x128@2x (256x256) as used by Tauri
    const path128_2x = path.join(iconsDir, '128x128@2x.png');
    if (pngBuffers[256]) {
      await fs.promises.writeFile(path128_2x, pngBuffers[256]);
    } else {
      await fs.promises.copyFile(path.join(iconsDir, 'icon_256.png'), path128_2x);
    }
    console.log('Wrote', path128_2x);

    // Ensure icon.png uses the largest (512)
    const iconPng = path.join(iconsDir, 'icon.png');
    await fs.promises.copyFile(path.join(iconsDir, 'icon_512.png'), iconPng);
    console.log('Wrote', iconPng);

    // Build .ico using png-to-ico from the written files
    console.log('Creating icon.ico...');
    const icoFiles = [
      path.join(iconsDir, '32x32.png'),
      path.join(iconsDir, '128x128.png'),
      path.join(iconsDir, 'icon_256.png')
    ];
    const icoBuf = await pngToIco(icoFiles);
    fs.writeFileSync(path.join(iconsDir, 'icon.ico'), icoBuf);
    console.log('Wrote', path.join(iconsDir, 'icon.ico'));

    console.log('Icon generation complete.');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
})();
