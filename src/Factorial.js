const Factorial = (n) => {
  //   using for loop
  //   let fact = 1;
  //   for (let i = 1; i <= n; i++) {
  //     fact = fact * i;
  //   }
  //   return fact

    // using reduce
    let arr = Array.from(Array(n + 1).keys());
    console.log(arr.slice(1,));
    let res = arr.slice(1,).reduce((a, b) => a * b);
    console.log(res);
};

console.log(Factorial(5));
export default Factorial;
