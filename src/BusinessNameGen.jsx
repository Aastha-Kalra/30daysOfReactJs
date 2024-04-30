import { useState } from "react";
const BusinessNameGen = () => {
  const [businessName, setBusinessName] = useState("");
  const BusinessNameGenrator = () => {
    const Adjective = () => {
      let random = Math.floor(Math.random() * 3);
      let a = "Crazy";
      let b = "Amazing";
      let c = "Fire";
      switch (random) {
        case 0:
          return a;
        case 1:
          return b;
        case 2:
          return c;
        default:
          console.log("Sorry");
      }
    };

    const ShopName = () => {
      let random = Math.floor(Math.random() * 3);
      let a = "Engine";
      let b = "Foods";
      let c = "Garments";
      switch (random) {
        case 0:
          return a;
        case 1:
          return b;
        case 2:
          return c;
        default:
          console.log("Sorry");
      }
    };

    const AnotherWord = () => {
      let random = Math.floor(Math.random() * 3);
      let a = "Bros";
      let b = "Ltd";
      let c = "Hub";
      switch (random) {
        case 0:
          return a;
        case 1:
          return b;
        case 2:
          return c;
        default:
          console.log("Sorry");
      }
    };

    setBusinessName(`${Adjective()} ${ShopName()} ${AnotherWord()}`);
  };

  return (
    <div className="flex justify-center items-center gap-9 flex-col text-3xl my-10">
      <div>Business Name Generator </div>
      <button
        className="bg-green-800 px-10 py-3 text-yellow-400 rounded-xl hover:scale-95 transition-all duration-500 ease-in "
        onClick={BusinessNameGenrator}
      >
        Generate New Name
      </button>
    <div>New business name :</div>
      <span className="text-yellow-300 mt-4">{businessName}</span>
    </div>
  );
};

export default BusinessNameGen;
