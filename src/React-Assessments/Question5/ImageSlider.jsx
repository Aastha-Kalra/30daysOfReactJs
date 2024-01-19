import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2uDTFgxgcOXr3Z7R5gRRy3OdUVNdLSC5DbB-IY0vPqYo2T22KIH1SrM9GpmzvAUOI-M&usqp=CAU",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/10/2d/1d/102d1d4c10f20f81f7845a17bf763800.jpg",
    },
    {
      id: 5,
      url: "https://st2.depositphotos.com/1718692/7425/i/450/depositphotos_74257459-stock-photo-lake-near-the-mountain-in.jpg",
    },
  ];

  const [image, setImage] = useState(images);
  const [slideNumber, setSlideNumber] = useState(0);

  const handlePrev = () => {
    if (slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
      setImage(image);
    }
  };
  const handleNext = () => {
    if (slideNumber !== image.length - 1) {
      setSlideNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex justify-center items-center overflow-hidden relative">
      <button
        className="px-4 bg-black absolute left-3 py-4 top-72"
        onClick={handlePrev}
      >
        Prev
      </button>
      <img src={image[slideNumber].url} alt="" className="w-full h-full " />
      <button
        className="px-4 bg-black absolute right-3 py-4 top-72"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
