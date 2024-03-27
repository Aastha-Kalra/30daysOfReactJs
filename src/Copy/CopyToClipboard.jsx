import React, { useEffect, useState } from "react";
import CustomCopyHook from "./CustomCopyHook";

// custom hook

const CopyToClipboard = () => {
  const [text, setText] = useState("");
  const copy = CustomCopyHook(text);

  return (
    <div className="flex flex-col text-xl justify-center items-center gap-4 my-14 px-28">
      <input
        type="text"
        className="bg-slate-600 focus:outline-none p-3 w-full "
        value={text}
        onChange={(e) => setText(e.target.value)}
        name=""
        id=""
      />
      <p >
      Copied value 
      </p>
      <p>
      {copy}
      </p>
    </div>
  );
};

export default CopyToClipboard;
