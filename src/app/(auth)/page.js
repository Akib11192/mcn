import { Headline } from "@/components/auth";
import Link from "next/link";

const Page = () => {
  const headLineWords = ["welcome", "to", "the", "MCN", "network"];

  return (
    <main className="flex min-h-screen flex-col bg-black md:flex-row">
      {/* Left side: Brand */}
      <section className="flex flex-1 items-center justify-center px-10 py-12 md:px-14 line-clamp-3">
        <Headline headlineText={headLineWords} />
      </section>

      {/* Right side: Authentication */}
      <section className="flex flex-1 flex-col items-center justify-center gap-5 px-6 pb-12 sm:px-10 md:px-8 md:py-12">
        <Link href="/login" className="w-full max-w-sm">
          <button className="w-full rounded-2xl bg-amber-50 md:mx-6 py-4 text-xl font-semibold text-black transition-colors hover:bg-amber-200 sm:text-2xl">
            Login
          </button>
        </Link>

        <Link href="/register" className="w-full max-w-sm">
          <button className="w-full rounded-2xl bg-amber-50 md:mx-6 py-4 text-xl font-semibold text-black transition-colors hover:bg-amber-200 sm:text-2xl">
            Register
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Page;
