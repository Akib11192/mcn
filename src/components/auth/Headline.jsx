export default function Headline({ headlineText = [] }) {
  return (
    <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
      {headlineText.map((word, index) => {
        const highlighted = word === "MCN" || word === "Network";

        return (
          <span
            key={`${word}-${index}`}
            className={
              highlighted
                ? "mr-[0.25em] inline-block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent"
                : "mr-[0.25em] inline-block text-white"
            }
          >
            {word}
          </span>
        );
      })}
      <span className="mt-3 block text-base font-medium leading-7 tracking-normal text-zinc-400 sm:text-lg">
        Your internet. Your account. One simple place.
      </span>
    </h1>
  );
}
