import { notFound } from 'next/navigation'
import { tutorials } from '@/lib/tutorials'
export function generateStaticParams() { return tutorials.map(({ slug }) => ({ slug })) }
export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const tutorial = tutorials.find((item) => item.slug === slug); if (!tutorial) notFound(); return <main><p className="eyebrow">Technical tutorial</p><h1>{tutorial.title}</h1><p>{tutorial.description}</p><pre><code>{tutorial.snippet}</code></pre></main> }
