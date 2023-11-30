import React, { useState } from "react";

const Dictionary = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState(null);
  const [error, setError] = useState(null);
  const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0]?.meanings || []);
      })
      .catch((err) => {
        console.warn(err);
        setError(err);
      });
  };
  return (
    <div className="text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-extrabold my-6">Glossary</div>
      <div>
        <input
          type="text"
          name=""
          id=""
          className="text-sky-500 bg-sky-200 h-16 rounded-l-lg w-96 focus:outline-none text-3xl px-2"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-sky-500 px-4 py-4 text-3xl rounded-r-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
     <div className="w-full px-44 pb-44 pt-14">
        {error && <p>{error}</p>}
        {word && (
          <div className="text-5xl text-white/90 px-4 py-7 bg-indigo-700 w-full min-h-96 h-full rounded-lg">
            {word.map((meaning, index) => (
              <div key={index}>
                <ul className="flex flex-col gap-5">
                  {meaning.definitions.map((definition, idx) => (
                    <li key={idx}>
                      <p> * {definition.definition}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
