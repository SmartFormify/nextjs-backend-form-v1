import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, normalize } from 'node:path'
const files=[]; function walk(d){for(const n of readdirSync(d)){const p=join(d,n);statSync(p).isDirectory()?walk(p):n==='README.md'&&files.push(p)}}; walk('examples');walk('tutorials');walk('docs')
for(const file of files){for(const match of readFileSync(file,'utf8').matchAll(/\]\(([^)#]+)(?:#[^)]+)?\)/g)){const target=normalize(join(file,'..',match[1]));if(!existsSync(target)) throw new Error(`${file}: broken link ${match[1]}`)}}
console.log('Relative README links verified.')
