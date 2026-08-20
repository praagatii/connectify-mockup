"use client";

import { useState } from "react";

const serviceOptions = [
  "Digital Solutions",
  "Web Development",
  "Mobile Apps",
  "SaaS Solutions",
  "E-commerce",
  "Cloud Computing",
  "AI/ML and Blockchain",
  "Managed Services",
  "Business Advisory",
  "Investment Consulting",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Project inquiry: ${String(data.get("service") ?? "General")}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Company: ${data.get("company") ?? ""}`,
        "",
        `${data.get("message") ?? ""}`,
      ].join("\n")
    );

    window.location.href = `mailto:business@connectify.global?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-brand focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-brand focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-muted">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-brand focus:outline-none"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-muted">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-sm text-black focus:border-brand focus:outline-none"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-black/15 bg-surface px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-brand focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-brand px-8 py-3.5 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Opening your emailÃ¢â‚¬Â¦" : "Send Message"}
      </button>
    </form>
  );
}