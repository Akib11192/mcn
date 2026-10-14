"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // Frontend only: password recovery is not connected yet.
    setTimeout(() => {
      setLoading(false);
      setMessage(
        "Password recovery is not connected yet. No email has been sent.",
      );
    }, 500);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="mb-10 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 font-bold text-black">
            M
          </div>

          <span className="text-xl font-bold tracking-wide">
            MCN <span className="text-amber-400">Network</span>
          </span>
        </Link>

        {/* Form Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">
          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Forgot password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            No worries! Enter the email address associated with your MCN Network
            account, and we&apos;ll help you recover access.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
              />
            </div>

            {message && (
              <p
                role="status"
                className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-sm leading-6 text-amber-300"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          <div className="mt-7 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-amber-400"
            >
              <span aria-hidden="true">←</span>
              Back to login
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          © 2026 MCN Network. All rights reserved.
        </p>
      </div>
    </main>
  );
}
