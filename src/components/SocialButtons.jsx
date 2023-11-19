import React from "react";

const Buttons = (props) => {
    const { classname, buttonText } =  props ;

    return <button className={`${classname}`}>{buttonText}</button>;
  };

const SocialButtons = () => {
 
  return (
    <div className="text-white flex justify-center items-center flex-col gap-5 text-4xl">
      <div>Social Buttons App using props</div>
      <div className="flex flex-col gap-5">
     <Buttons classname="text-pink-500" buttonText="Like"/>
     <Buttons classname="text-red-500" buttonText="Subscribe"/>
     <Buttons classname="text-sky-500" buttonText="Share"/>
      </div>
    </div>
  );
};

export default SocialButtons;
