const All = () => {
  // ArrayEqual([3,3,3],[3,3,4])
  // Average([4,4])
//   CountOcc('missisippi' , 's')
};
// 1.  arrayEqual
/*const ArrayEqual = (arr1,arr2)=>{
    if(arr1.length != arr2.length){
        console.log("Length is not equal");
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            console.log("Array not equal");
            return false
        }

    }
    console.log("Array equal");
    return true
}
*/

// 2. Average
/*const Average = (arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum);
    let ave = sum/arr.length
    console.log(ave);
    return ave

}*/

// 3 . Count Occurence
/*const CountOcc = (str, occ) => {
  let lower = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === occ) {
      count++;
    }
  }
  console.log(count);
  return count;
};
*/













export default All;