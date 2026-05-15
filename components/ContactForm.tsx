"use client";

import { useState, type FormEvent } from "react";
import { businessInfo } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(businessInfo.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded shadow-sm p-8 text-center">
        <h3 className="text-xl font-bold text-navy-900 mb-2">
          Message Sent
        </h3>
        <p className="text-gray-600 mb-4">
          Thanks for reaching out. Daniel will get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-copper font-semibold hover:text-copper-light transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-sm p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-warm-100 rounded px-4 py-2 text-navy-900 focus:outline-none focus:border-copper"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-warm-100 rounded px-4 py-2 text-navy-900 focus:outline-none focus:border-copper"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-warm-100 rounded px-4 py-2 text-navy-900 focus:outline-none focus:border-copper"
        />
      </div>
      <div>
        <label htmlFor="project-type" className="block text-sm font-semibold text-navy-900 mb-1">
          Project Type
        </label>
        <select
          id="project-type"
          name="project-type"
          required
          className="w-full border border-warm-100 rounded px-4 py-2 text-navy-900 focus:outline-none focus:border-copper bg-white"
        >
          <option value="">Select a project type</option>
          <option value="Kitchen">Kitchen Remodeling</option>
          <option value="Bathroom">Bathroom Remodeling</option>
          <option value="Basement">Basement Remodeling</option>
          <option value="Painting">House Painting</option>
          <option value="Electrical">Electrical Work</option>
          <option value="Concrete">Concrete Installation</option>
          <option value="Carpentry">Carpentry</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-warm-100 rounded px-4 py-2 text-navy-900 focus:outline-none focus:border-copper resize-vertical"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-copper hover:bg-copper-light disabled:opacity-50 text-white font-bold py-3 px-8 tracking-wide transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
