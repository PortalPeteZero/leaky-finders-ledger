#!/usr/bin/env node
// Image pipeline: PNG/JPG/HEIC -> WebP, 3 sizes per image, target <200KB hero
// Usage: node scripts/process-images.js --input <dir> --output <dir> --slug <slug>

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
function getArg(name) {
  const i = args.indexOf(`--${name}`)
  return i !== -1 ? args[i + 1] : null
}

const inputDir = getArg('input')
const outputDir = getArg('output')
const slug = getArg('slug')

if (!inputDir || !outputDir || !slug) {
  console.error('Usage: node process-images.js --input <dir> --output <dir> --slug <article-slug>')
  process.exit(1)
}

const SIZES = [
  { name: 'full',   width: 1600, quality: 82 },
  { name: 'medium', width: 900,  quality: 80 },
  { name: 'thumb',  width: 480,  quality: 78 },
]

const SUPPORTED = ['.png', '.jpg', '.jpeg', '.webp', '.gif']

async function processImage(inputPath, outputBase, stem) {
  const results = []
  for (const size of SIZES) {
    const outPath = path.join(outputBase, `${stem}-${size.name}.webp`)
    await sharp(inputPath)
      .resize({ width: size.width, withoutEnlargement: true })
      .webp({ quality: size.quality })
      .toFile(outPath)
    const stat = fs.statSync(outPath)
    results.push({ size: size.name, path: outPath, kb: Math.round(stat.size / 1024) })
  }
  return results
}

async function run() {
  const slugOutput = path.join(outputDir, slug)
  fs.mkdirSync(slugOutput, { recursive: true })

  const files = fs.readdirSync(inputDir).filter(f => SUPPORTED.includes(path.extname(f).toLowerCase()))
  console.log(`Processing ${files.length} images for slug: ${slug}`)

  for (const file of files) {
    const stem = path.basename(file, path.extname(file))
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, '')
    const inputPath = path.join(inputDir, file)
    console.log(`  ${file} -> ${stem}-{full,medium,thumb}.webp`)
    try {
      const results = await processImage(inputPath, slugOutput, stem)
      results.forEach(r => console.log(`    ${r.size}: ${r.kb}KB -> ${path.basename(r.path)}`))
    } catch (err) {
      console.error(`  ERROR: ${file}: ${err.message}`)
    }
  }
  console.log(`\nDone. Output at: ${slugOutput}`)
}

run().catch(err => { console.error(err); process.exit(1) })
