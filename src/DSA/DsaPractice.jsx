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

  // 21: make a first letter capital
  // function Alpha(str){
  //   let alpha = str.charAt(0).toUpperCase();
  //   return alpha + str.slice(1)
  // }

  // console.log(Alpha("aastha"));

  // 22: split the string in letters
  // function Charac(str){
  //   return str.split("").sort().join()

  // }

  // console.log(Charac("Aastha"));

  // 23: type of a argument
  //  function Arg(arg){
  //  return typeof(arg)
  //  }
  // console.log(Arg("Aastha"));

  // loops

  // 24: number of occurence of each letter in string
  // function Occurance(arg) {
  //   let present = {};
  //   arg.split("").forEach(function (elem) {
  //     if (present.hasOwnProperty(elem) === false) {
  //       present[elem] = 1;
  //     } else {
  //       present[elem]++;
  //     }
  //   });
  //   return present;
  // }

  // console.log(Occurance("Aastha"));

  // 25: Loop an array and sum of all members
  // var array = [1, 2, 3, 4, 5, 6];
  // var sum = 0;
  // for(let i=0;i<array.length;i++){
  //   sum = sum+array[i];
  // }
  // console.log("sum of array",sum);

  // we can also do it by foreach loop

  // array.forEach(function (elem) {
  //   sum += elem;
  // });
  // console.log(sum);

  //26: add only which are not string
  // let array = ["2", 4, 5, "1", "6", "9", 6, 7];
  // let sum = 0;
  // array.forEach(function (ele) {
  //   if (typeof ele === "number") {
  //     sum += ele;
  //   }
  // });
  // console.log("add only numbers", sum);

  //27: remove which don't have male gender
  // let arrr = [
  //   {
  //     name: "Aastha",
  //     gender: "Female",
  //   },
  //   {
  //     name: "pasta",
  //     gender: "male",
  //   },
  //   {
  //     name: "Boss",
  //     gender: "male",
  //   },
  //   {
  //     name: "Preeti",
  //     gender: "Female",
  //   },
  // ];

  // arrr.forEach(function (ele) {
  //   if (ele.gender === "male") {
  //    console.log( ele.name)
  //   } else {
  //     return "";
  //   }
  // });

  // clone array
  // function Clone(arr){
  //   return [...arr]
  // }

  // var newArray = Clone([1,2,3,4]);
  // console.log("NewArray", newArray);
  // console.log(  newArray.pop());
  // console.log(newArray);

  // we can also do it by map and foreach function

  // 28:get the first element of array
  // function firstEle(arr, n = 1) {
  //  if(n<=arr.length){
  //   for (let i = 0; i < n; i++) {
  //     console.log(arr[i]);
  //   }
  //  }
  //  else{
  //   console.log(n+" to elements hi nhi h");
  //  }
  // }

  // console.log(firstEle([1, 2, 3, 4],6));

  // 28:get the last element of array
  // function LastEle(arr, n=10){
  //   for(let i=n;i<arr.length;i++){
  //     console.log(arr[i]);
  //   }

  // }
  // console.log(LastEle([1,2,3,4,5,6],4));

  // 29: shuffle an array
  // function Shuffle(arr) {
  //   var len = arr.length;
  //   while (len > 0) {
  //     len--;
  
  //     var indexToBeChanged = Math.floor(Math.random() * (len + 1));
  //     var temp = arr[len];
  //     arr[len] = arr[indexToBeChanged];
  //     arr[indexToBeChanged] = temp;
  //   }
  //   return arr;
  // }
  
  // console.log(Shuffle([1, 2, 3, 4, 5]));

  // 30: union of two arrays
  // function Union(arg1, arg2){
  //  return [...new Set(arg1.concat(arg2))]

  // }
  // console.log(Union([1,2,3],[10,2,1,100,3]));

  // 31: duplicate number in array
  // let arrr = [1,2,4,3,2,3,6];
  // let duplicated = arrr.filter((ele, i, arr)=>arr
  // .indexOf(ele)!==i)
  // console.log("duplicated elements are......",duplicated);


  
  
  return (
    <div>
      <div className="text-white font-bold text-5xl text-center">
        DSA Practice
      </div>
    </div>
  );
};

export default DsaPractice;
