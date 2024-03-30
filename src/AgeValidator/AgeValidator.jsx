import React, { useState } from "react";
import Result from "./Result";
import Form from "./Form";

const AgeValidator = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [error, setError] = useState("");

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const onSubmit = (dob) => {
    if (!dob) {
      setError("Please enter your date of birth.");
      setIsEligible(false);
      setIsSubmitted(false);
      return; // Exit early if date of birth is not provided
    }

    const age = calculateAge(dob);
    setIsEligible(age >= 18);
    setIsSubmitted(true);
    setError(""); // Clear any previous error
  };

  const onBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <Result onBack={onBack} isEligible={isEligible} />
      ) : (
        <Form onSubmit={onSubmit} error={error} />
      )}
    </div>
  );
};

export default AgeValidator;


