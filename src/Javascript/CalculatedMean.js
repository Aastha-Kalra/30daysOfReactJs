const CalculatedMean = (arr) => {
    const sum = arr.reduce((acc,curr)=>acc+curr,0)
    return sum/arr.length
}
console.log(CalculatedMean([5,6,5]));
export default CalculatedMean