const Duplicates = (arr) => {
    const dup = [...new Set(arr)]
    return dup
 
}
console.log(Duplicates([3,4,5,4,3,2,2,3,4,3,3]));
export default Duplicates