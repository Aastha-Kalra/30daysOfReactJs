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

  // console.log(sumOfNaturalNumbers(4));

  //2:  sum of digit
  function sumOfdigit(num) {
    let sum = 0;
    while (num > 0) {
      sum += Math.floor(num % 10);
      num /= 10;
    }
    return sum;
  }

  // console.log(sumOfdigit(12345));

  //3: count no. of digits

  function Count(num) {
    let count = 0;
    do {
      count++;
      num = Math.floor(num / 10);
    } while (num > 0);
    return count;
  }

  // console.log(Count(132));

  //4: Palindrome no.
  function Palindrome(num) {
    let copyNum = num,
      reverseNum = 0;
    while (copyNum > 0) {
      const lastDigit = copyNum % 10;
      reverseNum = reverseNum * 10 + lastDigit;
      copyNum = Math.floor(copyNum / 10);
    }
    if (num === reverseNum) {
      return "Palindrome";
    } else {
      return "Not";
    }
  }

  // console.log(Palindrome(2343));

  //5: Fibonaacci series
  function Fibonacci(num) {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
  }

  // console.log(Fibonacci(3));

  // 6: Missing number
  function Missing(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return (nums.length * (nums.length + 1)) / 2 - sum;
  }

  // console.log(Missing([3,0,2]));

  // 7: Find element in array
  function FindElement(arr, target) {
    for (let x of arr) {
      if (x === target) {
        return true;
      }
    }
    return false;
  }
  console.log(FindElement([1, 2, 3], 3));

  
  return (
    <div>
      <div className="text-white font-bold text-5xl text-center">
        DSA Practice
      </div>
    </div>
  );
};

export default DsaPractice;
