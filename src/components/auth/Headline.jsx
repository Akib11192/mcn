"use client";

import { useEffect, useState } from "react";

const Headline = ({ headlineText }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const coloredWords = headlineText.map((word) => ({
      text: word,
      color:
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0"),
    }));

    setWords(coloredWords);
  }, [headlineText]);

  return (
    <h1 className="text-center text-4xl font-bold md:text-6xl">
      {words.map((word, index) => (
        <span key={index} style={{ color: word.color }}>
          {word.text}{" "}
        </span>
      ))}
    </h1>
  );
};

export default Headline;
