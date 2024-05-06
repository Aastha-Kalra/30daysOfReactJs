import React, { useEffect, useRef, useState } from "react";
import { WORDS_WITH_TIMINGS } from "./text.json";
import song from "../assests/text.mp3";

const TextToAudio = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [visitedText, setVisitedText] = useState([]);
  const audioRef = useRef();

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      const currentTime = audioElement.currentTime;
      const wordIndex = WORDS_WITH_TIMINGS.findIndex(
        (w) => currentTime >= w.startTime && currentTime < w.startTime + 0.25
      );
      setHighlightedIndex(wordIndex);
      if (wordIndex !== -1 && !visitedText.includes(wordIndex)) {
        setVisitedText([...visitedText, wordIndex])
      }
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [visitedText]);

  return (
    <div className="flex flex-col justify-center items-center px-44 bg-slate-900 text-xl gap-10 my-10 py-10">
      <div>TextToAudio</div>
      <p>
        {WORDS_WITH_TIMINGS.map((w, index) => (
          <span
            key={index}
            className={`${
              index === highlightedIndex
                ? "bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent"
                : visitedText.includes(index)
                ? "bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                : ""
            }`}
          >
            {w.text}
          </span>
        ))}
      </p>

      <audio src={song} ref={audioRef} autoPlay controls></audio>
    </div>
  );
};

export default TextToAudio;
