import React, { useState } from "react";
import QRCode from "qrcode.react";
const QRcode = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="text-5xl py-4 text-teal-600 font-extrabold">QRCode</div>

      <div>
        <input
          type="text"
          name=""
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id=""
          className="w-96 h-14 rounded-md bg-teal-300 text-black text-2xl p-2 focus:outline-none"
        />

        <div className="w-full h-96 my-10">
        {input && <QRCode value={input} size={400} />}
        </div>
      </div>
    </div>
  );
};

export default QRcode;
