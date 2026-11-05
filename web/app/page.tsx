import TemplateBrowser from '@/components/TemplateBrowser';
import { CATEGORIES, getTemplates } from '@/lib/templates';

export default function Home() {
  const items = getTemplates().map((t) => ({
    slug: t.slug,
    category: t.category,
    title: t.title,
    summary: t.summary,
    tags: t.tags,
    copyText: t.copyText,
    searchText: t.searchText,
  }));
  const categories = Object.entries(CATEGORIES)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([id, c]) => ({ id, label: c.label, description: c.description }));
  return (
    <>
      <h1 className="text-3xl font-bold">Product &amp; business-analysis templates</h1>
      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
        Search, copy, and adapt templates for payroll and HR technology projects. Each one has a how-to note and a filled-in fictional example.
      </p>
      <div className="mt-6">
        <TemplateBrowser items={items} categories={categories} />
      </div>
    </>
  );
}
