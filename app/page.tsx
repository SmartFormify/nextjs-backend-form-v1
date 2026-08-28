import Link from 'next/link'
import { examples } from '@/lib/catalogue'

export default function Home() {
  return <main><header><p className="eyebrow">Next.js 16 form patterns</p><h1>Next.js Form Backend Examples</h1><p>Copyable App Router forms using native POST, Fetch, Server Actions, Route Handlers, TypeScript, Zod, and a hosted form endpoint.</p><p><Link href="/tutorials/basic-app-router-form">Start with a native form</Link> · <a href="https://www.smartformify.com/create-endpoint">Create an endpoint</a></p></header><section><h2>Ready-to-use forms</h2><div className="grid">{examples.map((example) => <article key={example.slug}><h3><Link href={`/examples/${example.slug}`}>{example.name}</Link></h3><p>{example.summary}</p></article>)}</div></section></main>
}
