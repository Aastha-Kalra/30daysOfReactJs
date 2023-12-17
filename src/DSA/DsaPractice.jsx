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
  // console.log(FindElement([1, 2, 3], 3));

  // 8: Find Index of element
  function FindIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      } else -1;
    }
  }
  // console.log(FindIndex([1, 2, 3], 3));

  // 9: add, delete and update on index
  let arr = [1, 2, 3, 4];
  //  arr.splice(1,0,567) add
  // arr.splice(2,3) delete
  // arr.splice(1,2,'Hello') update
  // console.log(arr);

  // //  10: flat the array
  // let array = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10];
  // let flattedArray = array.flat(1);
  // console.log(flattedArray);

  // 11:max,min array
  // let arr1 = [1, 2, 3, 4];
  // console.log(Math.min(...arr1));

  // 12: reverse the array
  // console.log(arr1.reverse());

  // 13: reverse string
  // let str = "aastha kalra";
  // console.log("reverse",str.split("").reverse().join(""));

  // 14: check if an object is array or not
  // function CheckArray(elem) {
  //   return Array.isArray(elem);
  // }
  // console.log(CheckArray([]), CheckArray({}));

  // 15:empty an array
  // let emp = [ 1,2,3,4,5];
  // console.log(emp.splice());

  // 16: num is integar or not
  // function Number(num) {
  //   if (num % 1 === 0) {
  //     return "integar";
  //   } else {
  //     return "Not a number";
  //   }
  // }

  // console.log(Number("24324"));

  // 17: duplicate the given number
  // function Duplicate(arr){
  //   console.log(arr.concat(arr));
  // }
  // Duplicate(["hello","hii"]);

  // 18: reverse a number
  // function ReverseNum(num) {
  //   return num.toString().split("").reverse().join("")
  // }

  // console.log("Reverse Number",ReverseNum(23243));

  // 19: reverse a number
  // function REverse(num) {
  //   let rev = 0;
  //   while (num > 0) {
  //     let rem = num % 10;
  //     rev = rev * 10 + rem;
  //     num = Math.floor(num / 10);
  //   }
  //   return rev;
  // }

  // console.log(REverse(1234));

  // 20: Palindrome
  // function Palindrome(str) {
  //   var reverse = str.split("").reverse().join("");
  //   if (reverse === str) {
  //     return "Palindrome";
  //   } else {
  //     return "Not a palindrome";
  //   }
  // }

  // console.log(Palindrome("212"));


















  return (
    <div>
      <div className="text-white font-bold text-5xl text-center">
        DSA Practice
      </div>
    </div>
  );
};

export default DsaPractice;
