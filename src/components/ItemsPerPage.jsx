import React, { useState } from "react";
const ItemsPerPage = () => {
  const items = [
    "Tom & Jerry",
    "Mickey Mouse",
    "Pokemon",
    "Ben 10",
    "Chhota Bheem",
    "Shin-chan",
    "Doraemon",
  ];

  const itemsPerPage = 2;

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="bg-black h-screen text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-bold">Items Per Page</div>

      <div>
        {currentItem.map((item, i) => (
          <ol type="a">
            <li key={i} className="text-3xl">
              {i + 1}
              &nbsp;
              {item}
            </li>
          </ol>
        ))}
      </div>

      <div>
        {pageNumber.map((num) => (
          <li
            key={num}
            onClick={() => setCurrentPage(num)}
            className="cursor-pointer text-3xl"
          >
            Page {num}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ItemsPerPage;
