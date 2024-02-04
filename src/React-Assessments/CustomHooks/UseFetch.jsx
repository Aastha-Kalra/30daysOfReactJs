import React, { useEffect, useState } from "react";
const UseFetch = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(11002)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${index}`
        );
        const result = await response.json();
        if (result.drinks && result.drinks.length > 0) {
          setData(result.drinks);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, [index]);

  const handleIndex = () => {
    setIndex((i) => i + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>UseFetch</div>
      <p>
        Implement the `useFetch` function that accepts URL as a parameter to
        instantiate API call and returns data
      </p>
      {Array.isArray(data) &&
        data.map((drink) => (
          <div key={drink.idDrink} className="flex flex-col gap-2 px-44">
            <h3>Name: {drink.strDrink}</h3>
            <p>Category: {drink.strCategory}</p>
            Ingredients :
            <div className="grid grid-cols-3 gap-2">
              <p>{drink.strIngredient1}</p>
              <p>{drink.strIngredient2}</p>
              <p>{drink.strIngredient3}</p>
              <p>{drink.strIngredient4}</p>
              <p>{drink.strIngredient5}</p>
              <p>{drink.strIngredient6}</p>
              <p>{drink.strIngredient7}</p>
              <p>{drink.strIngredient8}</p>
              <p>{drink.strIngredient9}</p>
              <p>{drink.strIngredient10}</p>
              <p>{drink.strIngredient11}</p>
              <p>{drink.strIngredient12}</p>
              <p>{drink.strIngredient13}</p>
              <p>{drink.strIngredient14}</p>
              <p>{drink.strIngredient15}</p>
            </div>
            <p className="">Instructions: {drink.strInstructions}</p>
            <div className="flex justify-center items-center my-4">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-44 "
              />
            </div>
          </div>
        ))}

      <button onClick={handleIndex} className="bg-yellow-200 px-4 py-2">
        Next
      </button>
    </div>
  );
};

export default UseFetch;
