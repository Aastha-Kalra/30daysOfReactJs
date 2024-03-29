import React, { useState } from "react";

const Form = ({onSubmit, error}) => {
    const [showMsg,setshowMsg]=useState('')
  return (
    <>
      <p>Find out if you are eligible to use our services!</p>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">What is your date of birth?</label>
        <input type="date" name="" id="" />
        {error ? <p>{error}</p>:''}
        <input type="submit" value="Check" />
        <button>Why do we need to know this?</button>
        <p>
          Your date of birth determines if you can use our platform. You must be
          at least 18 years old to use our services.
        </p>
      </form>
    </>
  );
};

export default Form;
