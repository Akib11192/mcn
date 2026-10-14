"use client";
import Link from "next/link";

import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
      <div className="w-full max-w-md">
        {/* Brand */}
        <Link href="/" className="mb-10 block text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            MCN <span className="text-amber-300">Network</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Your connection, your control.
          </p>
        </Link>

        {/* Login Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Sign in to manage your internet connection.
          </p>

          <form className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300 focus:ring-1 focus:ring-amber-300"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-amber-200 text-sm"
                >
                  Forgot Password
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter yout password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 text-xs font-medium text-zinc-400 transition hover:text-amber-400"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-200 px-4 py-3 font-semibold text-black transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-amber-300 hover:text-amber-200"
            >
              Create account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          © 2026 MCN Network. All rights reserved.
        </p>
      </div>
    </main>
  );
}
