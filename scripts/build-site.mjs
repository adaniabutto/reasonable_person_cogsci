// Copies the hosted experiments from docs/ into dist/ under URL-friendly paths
// (the source folder names contain spaces and a typo, which make poor URLs).
import { cp, rm, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const routes = [
  ['docs/fully within-subjets', 'within-subjects'],
  ['docs/new between-subjects/experiment1/relevance', 'between-subjects/experiment1/relevance'],
  ['docs/new between-subjects/experiment1/controllability', 'between-subjects/experiment1/controllability'],
  ['docs/new between-subjects/experiment1/normality', 'between-subjects/experiment1/normality'],
  ['docs/new between-subjects/experiment2/same', 'between-subjects/experiment2/same'],
  ['docs/new between-subjects/experiment2/different', 'between-subjects/experiment2/different'],
  ['docs/new between-subjects/experiment2/endorse', 'between-subjects/experiment2/endorse'],
]

const skip = (src) => !/(^|\/)\.DS_Store$/.test(src)

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })
await cp(path.join(root, 'site'), dist, { recursive: true, filter: skip })

for (const [from, to] of routes) {
  await cp(path.join(root, from), path.join(dist, to), { recursive: true, filter: skip })
  console.log(`${from} -> /${to}/`)
}
