import React, { useState } from "react";

const Form = ({ onSubmit, error }) => {
  const [dob, setDOB] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  const handleShowMsg = () => {
    setShowMsg(true);
  };
  
  return (
    <>
      <p>Find out if you are eligible to use our services!</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="">What is your date of birth?</label>
        <input
          type="date"
          value={dob}
          onChange={handleDOBChange}
          required // Add required attribute for form validation
        />
        {error && <p>{error}</p>}
        <input type="submit" value="Check" />
        <button onClick={handleShowMsg}>Why do we need to know this?</button>
        {showMsg && (
          <p>
            Your date of birth determines if you can use our platform. You must be
            at least 18 years old to use our services.
          </p>
        )}
      </form>
    </>
  );
};

export default Form;

