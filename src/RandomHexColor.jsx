import { useState } from "react";
const RandomHexColor = () => {
  const [bg, setBg] = useState("");

  const RandomColor = () => {
    const random = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    setBg(random);
  };
  return (
    <div style={{background:bg, height:100 + 'vh'}} className="flex  justify-center items-center text-3xl flex-col gap-10">
      <div className="">RandomHexColor</div>

      <button className="bg-black p-4" onClick={RandomColor}>Click</button>
      {bg}
    </div>
  );
};

export default RandomHexColor;
