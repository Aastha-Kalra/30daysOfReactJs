const Duplicate = (arr) => {
    let newArray  = [...new Set(arr)];
    return newArray
  
}
console.log(Duplicate([3,4,3,4,3,3,3,35,6]));

export default Duplicate