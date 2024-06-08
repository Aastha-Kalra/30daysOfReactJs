import React, { useEffect, useState } from "react";
import LoderAnimation from "../Loader/LoderAnimation";

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCards(shuffle([...images, ...images]));
      setLoading(false);
    }, 200); // Simulate a delay for loading
  }, [images]);
  const handleCardClick = (index) => {
    if (
      disabled ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    )
      return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setDisabled(true);
      setTimeout(() => {
        const [firstIndex, secondIndex] = newFlippedCards;
        if (cards[firstIndex].img === cards[secondIndex].img) {
          setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        }
        setFlippedCards([]);
        setDisabled(false);
      }, 1000);
    }
  };

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

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      {
        loading ? <LoderAnimation/> : <MemoryGame images={images}/>
      }
    </div>
  );
};

export default App;
