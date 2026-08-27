import { existsSync, readdirSync } from 'node:fs'
const required = ['tutorials','examples','docs']
for (const directory of required) { if (!existsSync(directory) || readdirSync(directory).length === 0) throw new Error(`Missing meaningful ${directory} content`) }
for (const forbidden of ['Login UI Form','Registration Form','Contact Form with File Upload']) if (existsSync(forbidden)) throw new Error(`Unsafe legacy directory remains: ${forbidden}`)
console.log('Example structure verified.')
