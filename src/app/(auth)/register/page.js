"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
        {/* Brand */}
        <Link href="/" className="mb-8 block text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            MCN <span className="text-amber-300">Network</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Your connection, your control.
          </p>
        </Link>

        {/* Registration Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Join MCN Network to manage your internet connection.
          </p>

          <form className="mt-7 space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Full name
              </label>
              <input
                value={formData.fullName}
                onChange={handleChange}
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300 focus:ring-1 focus:ring-amber-300"
              />
            </div>

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
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300 focus:ring-1 focus:ring-amber-300"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Mobile number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                placeholder="01XXXXXXXXX"
                pattern="01[3-9][0-9]{8}"
                title="Enter a valid 11-digit Bangladeshi mobile number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300 focus:ring-1 focus:ring-amber-300"
              />
            </div>

            {/* Password */}
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-200 px-4 py-3 font-semibold text-black transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-amber-300 hover:text-amber-200"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} MCN Network. All rights reserved.
        </p>
      </div>
    </main>
  );
}
