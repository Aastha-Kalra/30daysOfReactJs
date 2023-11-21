import React, { useState } from "react";

const CountryCapital = () => {
  const countryAndCapitalsList = [
    {
      id: "NEW_DELHI",
      capitalDisplayText: "New Delhi",
      country: "India",
    },
    {
      id: "LONDON",
      capitalDisplayText: "London",
      country: "United Kingdom",
    },
    {
      id: "PARIS",
      capitalDisplayText: "Paris",
      country: "France",
    },
    {
      id: "KATHMANDU",
      capitalDisplayText: "Kathmandu",
      country: "Nepal",
    },
    {
      id: "HELSINKI",
      capitalDisplayText: "Helsinki",
      country: "Finland",
    },
  ];

  const [capital, setCapital] = useState(countryAndCapitalsList[0].country);

  return (
    <div className="text-white flex justify-center items-center flex-col gap-5 text-4xl py-10">
      <div>Capital Of Country App</div>

      <div>
        <select
          name=""
          id=""
          className="text-pink-500"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        >
          {countryAndCapitalsList.map((item) => {
            return (
              <option className="text-sky-500" value={item.id}>
                {item.capitalDisplayText}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CountryCapital;
