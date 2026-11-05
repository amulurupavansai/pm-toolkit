import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'PM Toolkit: payroll & HR tech templates',
  description:
    'Reusable product-management and business-analysis templates for payroll and HR tech: BRD, PRD, test plans, UAT, go-live checklists, and Claude prompts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-bold text-indigo-600 dark:text-indigo-400">PM Toolkit</Link>
            <span className="text-sm text-slate-600 dark:text-slate-400">Payroll &amp; HR tech templates</span>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500">
          All examples are fictional. Replace placeholders such as {'{{name}}'} with your own details.
        </footer>
      </body>
    </html>
  );
}
