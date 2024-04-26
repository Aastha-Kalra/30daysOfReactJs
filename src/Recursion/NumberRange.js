const NumberRange = (a,b) => {
    let arr =[]
    if(a<=b){
        arr.push(a)
        return NumberRange(a+1,b)
    }
  return arr
}
console.log(NumberRange(4,8));
export default NumberRange
