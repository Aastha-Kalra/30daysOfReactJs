// write a program to find the factorial of a number

const Factorial=(n)=>{
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.warn(Factorial(5));
export default Factorial



