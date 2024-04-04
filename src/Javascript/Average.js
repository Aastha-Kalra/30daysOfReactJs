const Average = (arr) => {
   const sum= arr.reduce((acc,cur)=>acc+cur)
    console.log(sum);
    return sum/arr.length
}
console.log(Average([4,5,6,78]));
export default Average