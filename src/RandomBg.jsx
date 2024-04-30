const RandomBg = () => {
  const container = document.getElementsByClassName("box");
  const getRandomColor = () => {
    for (let i = 0; i < container.length; i++) {
      const color = `#${Math.random().toString(16).slice(2, 8)}`;
      container[i].style.backgroundColor = color;
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center my-10 py-10 gap-6 w-full">
      <button
        onClick={getRandomColor}
        className="bg-yellow-400 px-5 py-3 flex flex-col justify-center items-center text-3xl"
      >
        Generate Random Color
      </button>
      <div className="box w-full text-center">Box1</div>
      <div className="box w-full  text-center">Box2</div>
      <div className="box w-full  text-center">Box3</div>
      <div className="box w-full text-center">Box4</div>
      <div className="box w-full  text-center">Box5</div>
    </div>
  );
};

export default RandomBg;
