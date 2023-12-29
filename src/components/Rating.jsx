import { useState } from "react";

export default function Rating() {
  const [selectEmoji, setSelectEmoji] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [text, setText] = useState("");
  const handleSelect = (emoji) => {
    setShowFeedbackForm(true);
    setSelectEmoji(emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    console.log(selectEmoji);
    console.log(text);
  };
  return (
    <div className="text-yellow-500 text-3xl flex flex-col justify-center items-center gap-5 p-4">
      <h1>Rating Component</h1>
      <div id="feedback">
        <button onClick={() => handleSelect("😍")}>😍</button>
        <button onClick={() => handleSelect("😀")}> 😀</button>
        <button onClick={() => handleSelect("🙁")}> 🙁</button>
        <button onClick={() => handleSelect("😭")}>😭</button>
      </div>
      {showFeedbackForm && (
        <div className="flex flex-col justify-center items-center">
          <textarea
            name=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            className="bg-slate-800 p-3 font-bold focus:outline-none"
            cols="30"
            rows="10"
          ></textarea>
          <button
            id="submit"
            className="bg-green-800 px-10 py-3 my-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
