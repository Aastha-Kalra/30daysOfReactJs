const SumOfNum = (num) => {

    // let sum=0;
    // let digits = num.toString();

    // for(let digit in digits){
    //     sum+=parseInt(digit)
    // }
    // return sum



    // using reduce method
    let arr = Array.from(String(num),Number)
    return arr.reduce((acc,curr)=>acc+curr, 0)

};
console.log(SumOfNum(334));
export default SumOfNum;


