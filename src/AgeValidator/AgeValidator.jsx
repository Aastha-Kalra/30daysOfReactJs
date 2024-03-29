import React, { useState } from "react";
import Result from "./Result";
import Form from "./Form";

const AgeValidator = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [error, setError] = useState(false);

  const isValid = (dob) => {
    const todayDate = new Date();
    const birthDate = new Date(dob);
    const age = todayDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const dob = e.target.dob.value;
    setIsEligible(isValid(dob));
    setIsSubmitted(true);
  };

  const onBack =(e)=>{
    e.preventDefault()
    setIsSubmitted(false)
  }

  

  return <div>{isSubmitted ? <Result onBack={onBack} isEligible={isEligible}/> 
  : <Form onSubmit={onSubmit} error={error}/>}</div>;
};

export default AgeValidator;
