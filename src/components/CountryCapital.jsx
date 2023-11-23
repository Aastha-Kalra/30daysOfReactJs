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
    {
      id: "BEIJING",
      capitalDisplayText: "Beijing",
      country: "China",
    },
    {
      id: "COLOMBO",
      capitalDisplayText: "Colombo",
      country: "Sri Lanka",
    },
    {
      id: "ISLAMABAD",
      capitalDisplayText: "Islamabad",
      country: "Pakistan",
    },
    {
      id: "MALE",
      capitalDisplayText: "Male",
      country: "Maldives",
    },
  ];

  const [capital, setCapital] = useState(countryAndCapitalsList[0].id);
  const getCountry = (capitalId) => {
    const activeCapital = countryAndCapitalsList.find(
      (eachCapital) => eachCapital.id === capitalId
    );
    return activeCapital.country;
  };
  const country = getCountry(capital);
  return (
    <div className="text-white flex justify-center items-center flex-col gap-10 text-4xl py-10">
      <div>Capital Of Country App</div>
      <div className="w-full px-2 flex justify-center items-center">
        <select
          name=""
          id=""
          className="text-pink-500"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        >
          {countryAndCapitalsList.map((item) => {
            return (
              <option key={item.id} className="text-sky-500" value={item.id}>
                {item.capitalDisplayText}
              </option>
            );
          })}
        </select>
        <p className="text-4xl mx-2">Is the capital of</p>
      </div>
      <div className="text-yellow-300">{country}</div>
    </div>
  );
};

export default CountryCapital;
