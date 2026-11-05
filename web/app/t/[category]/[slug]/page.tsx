import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CopyButton from '@/components/CopyButton';
import { CATEGORIES, getTemplate, getTemplates } from '@/lib/templates';

export const dynamicParams = false;

export function generateStaticParams() {
  return getTemplates().map((t) => ({ category: t.category, slug: t.slug }));
}

type Params = { category: string; slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const t = getTemplate(category, slug);
  return t ? { title: `${t.title} | PM Toolkit`, description: t.summary } : {};
}

export default async function TemplatePage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const t = getTemplate(category, slug);
  if (!t) notFound();
  return (
    <article>
      <Link href="/" className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">&larr; All templates</Link>
      <p className="mt-4 text-sm text-slate-500">{CATEGORIES[t.category]?.label ?? t.category}</p>
      <h1 className="text-3xl font-bold">{t.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">{t.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <CopyButton text={t.copyText} label="Copy template" />
        <CopyButton text={t.content} label="Copy full page (Markdown)" variant="secondary" />
      </div>
      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert prose-pre:overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{t.content}</ReactMarkdown>
      </div>
    </article>
  );
}
