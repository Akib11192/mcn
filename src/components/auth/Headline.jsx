export default function Headline({ headlineText = [] }) {
  return (
    <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:text-left">
      {headlineText.map((word, index) => {
        const highlighted = word === "MCN" || word === "Network";

        return (
          <span
            key={`${word}-${index}`}
            className={
              highlighted
                ? "mr-2 inline-block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
                : "mr-2 inline-block text-white"
            }
          >
            {word}
          </span>
        );
      })}
    </h1>
  );
}
