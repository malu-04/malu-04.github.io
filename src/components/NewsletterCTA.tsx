"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section py-20">
      <div className="card p-8 md:p-14 text-center relative overflow-hidden border border-purple-500/30">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 blur-[60px] rounded-full" />

        <div className="relative z-10">
          {/* Badge, headings, etc. using Tailwind + vars */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-3 max-w-md mx-auto justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="input flex-1 min-w-[200px] px-4 py-3 rounded-xl text-sm"
            />
            <Button type="submit" variant="primary" className="px-8">
              Subscribe free
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}