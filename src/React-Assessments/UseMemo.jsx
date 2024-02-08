import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [theme, setTheme] = useState();
  const [data, setData] = useState([]);
  function Use() {
    console.log("Useeffect called ");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    Use();
  }, []);

  return (
    <>
      <div>
        <div>UseMemo</div>
        useMemo is used to memoize values or computations, helping to optimize
        expensive calculations or data transformations.
        <br />
        <div>UseCallback</div>
        useCallback is used to memoize callback functions, reducing unnecessary
        re-creation of functions and optimizing component re-renders.
      </div>

      <div>
        The problem is every time i clicked on a theme button the filter
        function getting called, and all the products list are fetching and
        filtering again & again without needed. we have to stop this. for this
        we use usememo hook. usememo remembers the value of the function and
        will only re-rendered if there is a change in dependency of it. it takes
        one function and one dependency array .
      </div>
      <button
        className="bg-yellow-800 px-4 py-2 font-bold"
        onClick={() => setTheme(!theme)}
      >
        Set theme
      </button>

      <h1 className="my-4">{theme ? "light" : "dark"}</h1>

      <br />
      <div className="my-5">Product list</div>
      {MemoisedfilterByPrice.map((i, index) => {
        return (
          <>
            <p className="my-4 ml-4" key={index}>
              {i.title}
            </p>
          </>
        );
      })}
    </>
  );
};

export default UseMemo;
