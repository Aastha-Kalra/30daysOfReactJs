import React from "react";

const DsaPractice = () => {
  // 1: sum of all natural numbers from 1 to n

  function sumOfNaturalNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum = sum + i;
    }
    return sum;
  }

  console.log(sumOfNaturalNumbers(4));

  //2:  sum of digit
  function sumOfdigit(num) {
    let sum = 0;
    while (num > 0) {
      sum += Math.floor(num % 10);
      num /= 10;
    }
    return sum;
  }

  console.log(sumOfdigit(12345));

  // count no. of digits

  function Count(num) {
    let count = 0;
    do {
      count++;
      num = Math.floor(num / 10);
    } while (num > 0);
    return count;
  }

  console.log(Count(132));
  return (
    <div>
      <div className="text-white font-bold text-5xl text-center">
        DSA Practice
      </div>
    </div>
  );
};

export default DsaPractice;
