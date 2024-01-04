//1 factorial
// function Factorial(n) {
//   if (n == 1 || n == 0) {
//     return 1;
//   } else {
//     return n*Factorial(n-1) ;
//   }
// }

// console.log("", Factorial(5));

//2 :  sum of array
// 1st case
// function Sum(arr){
//  if(arr.length===0){
//   return 0;
//  }
//  else{
//   return arr[arr.length-1] + Sum(arr.slice(0,arr.length-1))
//  }
// }
// console.log("Sum of Array",Sum([1,2,3,4,5]));

// 2nd case
// function Sum(arr, n){
//   if(n===0){
//     return 0;
//   }
//   else{
//     return arr[n-1]+ Sum(arr,n-1)
//   }

// }
// console.log(Sum([1,2,3,4,5,3,4,54,6],6));




const Recursion = () => {
  return <div className="text-white text-4xl">Recursion Practice</div>;
};

export default Recursion;
