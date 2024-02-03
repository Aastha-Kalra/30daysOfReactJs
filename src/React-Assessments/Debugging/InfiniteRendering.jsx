import React, { useState } from "react";
export default function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const handleCount = (text) => {
    return text.length;
  };
  const onChange = (e) => {
    const newText = e.target.value;
    setValue(newText);
    setCount(handleCount(newText));
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
