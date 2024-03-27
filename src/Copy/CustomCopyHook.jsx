import { useEffect, useState } from "react";

const CustomCopyHook = (text) => {
  const [copy, setCopy] = useState("");
  useEffect(() => {
    const handleCopy = () => {
      navigator.clipboard.writeText(text)
      .then(() => setCopy(text));
    };
    handleCopy();
  }, [text]);

  return copy;
};

export default CustomCopyHook;
