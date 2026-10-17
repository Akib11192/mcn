import { Headline, Packages } from "@/components/auth";
import Link from "next/link";

export default function Page() {
  const headLineWords = ["Welcome", "to", "the", "MCN", "Network"];

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#09090b] text-white">
      {/* Hero */}
      <section className="relative mx-auto grid min-h-[90vh] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-amber-400/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/[0.07] blur-[100px]"
        />

        {/* Brand */}
        <section className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
          <Link href="/" className="mb-10 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-black text-zinc-950 shadow-lg shadow-amber-400/20">
              M
            </span>
            <span className="text-lg font-bold tracking-wide">
              MCN <span className="text-amber-400">NETWORK</span>
            </span>
          </Link>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-4 py-2 text-xs font-medium text-amber-300 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            Your connection starts here
          </div>

          <Headline headlineText={headLineWords} />

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Welcome to a simpler internet experience. Access your account,
            manage your connection, review your bills, and stay updated with MCN
            Network — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300 sm:text-sm">
              Reliable connectivity
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-300 sm:text-sm">
              Easy bill management
            </span>
          </div>
        </section>

        {/* Authentication panel */}
        <section className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white/[0.08] bg-zinc-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <p className="text-sm font-medium text-amber-400">
                CUSTOMER PORTAL
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Get connected.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Sign in to manage your internet account or create an account to
                get started.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/login"
                className="group flex w-full items-center justify-between rounded-xl bg-amber-400 px-5 py-4 font-semibold text-zinc-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
              >
                <span>Login to your account</span>
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/register"
                className="flex w-full items-center justify-between rounded-xl border border-zinc-700 bg-zinc-950/60 px-5 py-4 font-semibold text-white transition hover:border-amber-400/50 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
              >
                <span>Create an account</span>
                <span className="text-xl text-amber-400">↗</span>
              </Link>
            </div>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-xs text-zinc-500">MCN CUSTOMER AREA</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            <p className="text-center text-xs leading-5 text-zinc-500">
              Need help accessing your account?{" "}
              <Link
                href="/forgot-password"
                className="font-medium text-amber-400 hover:text-amber-300"
              >
                Recover password
              </Link>
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-zinc-600">
            Secure account access · MCN Network
          </p>
        </section>
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="border-t border-white/[0.06] bg-zinc-950/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Packages />
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-6 text-center text-xs text-zinc-600">
        © 2026 MCN Network. All rights reserved.
      </footer>
    </main>
  );
}
