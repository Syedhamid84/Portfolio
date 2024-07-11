import React from "react";
import { useTypewriter } from "./Typewriterhook";

export const TypeWriter = ({ texts, speed }) => {
  const displayText = useTypewriter(texts, speed);
  return (
    <p className="text-2xl">
      I'm into{" "}
      <span className="text-[#940808] font-semibold">{displayText}</span>
    </p>
  );
};
