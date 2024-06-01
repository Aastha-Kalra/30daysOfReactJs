import React, { useState } from "react";

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-5 my-14">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleCardClick(index)}
        >
          <img
            src={
              flippedCards.includes(index) || matchedCards.includes(index)
                ? card.img
                : "https://via.placeholder.com/150"
            }
            alt="Memory Card"
            className="w-64 h-64 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

const images = [
  { img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb" },
  { img: "https://images.unsplash.com/photo-1546842931-886c185b4c8c" },
  { img: "https://images.unsplash.com/photo-1520763185298-1b434c919102" },
  { img: "https://images.unsplash.com/photo-1442458017215-285b83f65851" },
  { img: "https://images.unsplash.com/photo-1496483648148-47c686dc86a8" },
  { img: "https://images.unsplash.com/photo-1591181520189-abcb0735c65d" },
];

const App = () => {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <MemoryGame images={images} />
    </div>
  );
};

export default App;
