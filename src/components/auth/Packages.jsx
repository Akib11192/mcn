"use client";

import { useState } from "react";

const packages = [
  {
    id: 1,
    name: "Basic",
    speed: "20",
    price: 500,
    description: "For everyday browsing",
    features: ["Everyday browsing", "HD video streaming", "Customer support"],
  },
  {
    id: 2,
    name: "Standard",
    speed: "40",
    price: 800,
    description: "For families and streaming",
    popular: true,
    features: [
      "Smooth everyday browsing",
      "Full HD streaming",
      "Multiple devices",
    ],
  },
  {
    id: 3,
    name: "Premium",
    speed: "60",
    price: 1200,
    description: "For heavy internet users",
    features: [
      "High-speed browsing",
      "4K streaming capable",
      "Gaming and multiple devices",
    ],
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="w-full text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-4 py-2 text-xs font-semibold tracking-widest text-amber-300">
          OUR INTERNET PLANS
        </span>

        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Find your perfect <span className="text-amber-400">plan.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          Explore our internet packages and find the speed that fits your
          household.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg) => {
          const isSelected = selectedPackage?.id === pkg.id;

          return (
            <article
              key={pkg.id}
              className={`relative flex flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                pkg.popular
                  ? "border-amber-400/60 bg-gradient-to-b from-amber-400/[0.09] to-zinc-900 shadow-xl shadow-amber-400/[0.04]"
                  : "border-white/[0.08] bg-zinc-900/70 hover:border-zinc-700"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-950">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{pkg.description}</p>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-amber-400">
                    {pkg.speed}
                  </span>
                  <span className="text-sm font-medium text-zinc-400">
                    Mbps
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold">
                    ৳{pkg.price.toLocaleString("en-BD")}
                  </span>
                  <span className="text-sm text-zinc-500">/ month</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/[0.08]" />

              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Package features
              </p>

              <ul className="flex-1 space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-xs text-amber-400">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPackage(pkg)}
                className={`mt-8 w-full rounded-xl px-4 py-3.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${
                  isSelected || pkg.popular
                    ? "bg-amber-400 text-zinc-950 hover:bg-amber-300"
                    : "border border-zinc-700 bg-zinc-800 text-white hover:border-amber-400/50 hover:bg-zinc-700"
                }`}
              >
                {isSelected ? "Selected" : "Choose package"}
              </button>
            </article>
          );
        })}
      </div>

      {selectedPackage && (
        <div
          role="status"
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-semibold">
              {selectedPackage.name} · {selectedPackage.speed} Mbps
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              ৳{selectedPackage.price.toLocaleString("en-BD")} per month
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Demo selection only. No package change request has been sent.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedPackage(null)}
            className="self-start rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 sm:self-auto"
          >
            Clear selection
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-xs leading-6 text-zinc-500">
        Speeds and prices shown are sample values. Confirm actual package
        details with MCN Network before publishing.
      </p>
    </section>
  );
}
