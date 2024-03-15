import React, { useRef, useState } from "react";

const OTPValidation = () => {
  const [otp, setOtp] = useState(Array(6).fill(null));
  const [active, setActive] = useState(0);
  const inputRef = useRef([]);
  const handleFocus = (index) => {
    setActive(index);
  };

  const handleChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      // Allow only single digit numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if available
      if (index < otp.length - 1) {
        inputRef.current[index + 1].focus();
        setActive(index + 1);
      }
    }
  };

  return (
    <div className="w-full px-8 py-4 ">
      <div className="space-x-4 flex justify-center items-center my-5">
        {otp.map((digit, i) => (
          <input
            type="text"
            key={i}
            maxLength={1}
            value={digit}
            onFocus={() => handleFocus(i)}
            onChange={(e) => handleChange(i, e.target.value)}
            ref={(ref) => (inputRef.current[i] = ref)}
            className={`bg-transparent border-b-2  focus:outline-none w-12 h-12 ${
              active === i ? "border-yellow-500" : "border-blue-950"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPValidation;
