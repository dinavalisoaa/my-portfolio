"use client";

import { ArrowRight } from "lucide-react";

// ponytail: opens the visitor's mail client; swap for an API route if you want messages without it
export function ContactForm({ email }: { email: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio — ${f.get("name")}`;
    const body = `${f.get("message")}\n\n${f.get("name")} · ${f.get("from")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3 focus:ring-2 focus:ring-ink/15 dark:bg-tile";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block text-sm text-ink-2">
        Full name
        <input name="name" required autoComplete="name" placeholder="Enter your full name" className={field} />
      </label>
      <label className="block text-sm text-ink-2">
        Email address
        <input name="from" type="email" required autoComplete="email" placeholder="Enter your email address" className={field} />
      </label>
      <label className="block text-sm text-ink-2">
        Message
        <textarea name="message" required rows={5} placeholder="Tell me about your project" className={`${field} resize-none`} />
      </label>
      <button className="flex items-center gap-2 rounded-full bg-btn px-5 py-3 text-sm text-btn-fg transition-opacity hover:opacity-85">
        Send message <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
