const ConsecutiveArrayNumbers = (a,b) => {
    let arr = []
    while(a<=b){
        arr.push(a)
        a++
    }
    return arr;
 
}
console.log(ConsecutiveArrayNumbers(0,8));
export default ConsecutiveArrayNumbers