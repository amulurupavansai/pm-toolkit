'use client';

import { useState } from 'react';

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CopyButton({
  text,
  label = 'Copy to clipboard',
  variant = 'primary',
}: {
  text: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  const base =
    'inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2';
  const styles =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800';
  return (
    <button
      type="button"
      className={`${base} ${styles}`}
      onClick={async () => {
        const ok = await copy(text);
        setState(ok ? 'copied' : 'error');
        setTimeout(() => setState('idle'), 2000);
      }}
    >
      <span aria-live="polite">{state === 'copied' ? 'Copied!' : state === 'error' ? 'Copy failed' : label}</span>
    </button>
  );
}
