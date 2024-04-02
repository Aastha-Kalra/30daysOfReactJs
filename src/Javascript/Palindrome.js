const Palindrome = (str) => {
  let string = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (string[i] !== string[j]) {
      console.log("Not Palindrome");
      return false;
    }

    i++;
    j--;
  }
  console.log("Palindrome");
};
console.log(Palindrome('racecar'));
export default Palindrome;
