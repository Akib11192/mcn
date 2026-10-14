"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    code: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.code.trim().length !== 6) {
      setMessageType("error");
      setMessage("Please enter your 6-digit verification code.");
      return;
    }

    if (formData.password.length < 8) {
      setMessageType("error");
      setMessage("Your new password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessageType("error");
      setMessage("Your passwords do not match.");
      return;
    }

    setMessageType("success");
    setMessage(
      "Your details are valid, but password resetting is not connected to the server yet.",
    );
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

        {/* Reset Password Card */}
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
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <path d="M12 15v3" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Reset password</h1>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Enter the 6-digit verification code and choose a new password for
            your MCN Network account.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Verification Code */}
            <div>
              <label
                htmlFor="code"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Verification code
              </label>

              <input
                id="code"
                name="code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6}"
                maxLength={6}
                placeholder="Enter 6-digit code"
                value={formData.code}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm tracking-widest text-white outline-none transition placeholder:tracking-normal placeholder:text-zinc-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
              />
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                New password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Confirm new password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 text-xs font-medium text-zinc-400 transition hover:text-amber-400"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Feedback */}
            {message && (
              <p
                role="status"
                className={`rounded-xl border p-3 text-sm leading-6 ${
                  messageType === "success"
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                    : "border-red-400/20 bg-red-400/5 text-red-300"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Reset password
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
