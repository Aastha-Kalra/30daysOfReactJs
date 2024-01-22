import React, { useState } from "react";

const Joke = () => {
  const url = "https://official-joke-api.appspot.com/jokes/programming/random";

  const [jokes, setJokes] = useState([]);

  const handleJoke = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJokes([data[0].setup]);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center text-2xl p-7 w-full h-full">
      {jokes.map((joke, index) => (
        <div key={index}>{joke}</div>
      ))}

      <button
        onClick={handleJoke}
        className="bg-yellow-500 px-4 py-2 rounded-lg text-green-800 my-14"
      >
        Get Joke
      </button>
    </div>
  );
};

export default Joke;
