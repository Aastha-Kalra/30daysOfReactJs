import React from "react";
import OTPValidation from "./OTPValidation";

const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center my-14 gap-7 text-xl">
      <h1>OTP Verification</h1>
      <p>Please enter the code we have sent you.</p>
      <OTPValidation/>
      <button className="bg-orange-100 font-bold px-4 py-2 rounded-lg">
        SUBMIT
      </button>
    </div>
  );
};

export default Input;
