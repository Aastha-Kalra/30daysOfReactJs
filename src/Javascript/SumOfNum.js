const SumOfNum = (num) => {
    let sum=0;
    let digits = num.toString();

    for(let digit in digits){
        sum+=parseInt(digit)
    }
    return sum

};
console.log(SumOfNum(333));
export default SumOfNum;
