import Link from "next/link";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black md:flex-row">
      {/* Left side: Brand */}
      <section className="flex flex-1 items-center justify-center px-6 py-12 md:px-8">
        <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Welcome to the <span className="text-red-600">MCN</span> Network
        </h1>
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
