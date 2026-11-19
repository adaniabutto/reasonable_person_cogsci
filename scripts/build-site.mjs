// Copies the hosted experiments from docs/ into dist/ under URL-friendly paths
// (the source folder names contain spaces and a typo, which make poor URLs).
import { cp, rm, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const routes = [
  ['experiment1/relevance', 'experiment1/relevance'],
  ['experiment1/controllability', 'experiment1/controllability'],
  ['experiment1/normality', 'experiment1/normality'],
  ['experiment2/same', 'experiment2/same'],
  ['experiment2/different', 'experiment2/different'],
  ['experiment2/endorse', 'experiment2/endorse'],
].map(([from, to]) => [path.join('docs/fully between-subjects', from), to])

const skip = (src) => !/(^|\/)\.DS_Store$/.test(src)

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })
await cp(path.join(root, 'site'), dist, { recursive: true, filter: skip })

for (const [from, to] of routes) {
  await cp(path.join(root, from), path.join(dist, to), { recursive: true, filter: skip })
  console.log(`${from} -> /${to}/`)
}
