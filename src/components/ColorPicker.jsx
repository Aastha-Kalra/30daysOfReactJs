import React, { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState('yellow')
    const handleChange= (e)=>{
setColor(e.target.value);

    }
  return (
    <div className="bg-black h-screen text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-bold">Color Picker</div>
      <div>
        <input type="color" name="" id="" onChange={handleChange} />

      </div>
      <div className="w-96 h-96 rounded-full" style={{backgroundColor:color}}>

      </div>
    </div>
  );
};

export default ColorPicker;
