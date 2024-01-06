// 1: bubble sort
// const BubbleSort = (arr) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// };

// console.log("bubble sort ", BubbleSort([3, 12, 14, 1, 5, 8, 6]));

// selection sort 
const SelectionSort=(arr)=>{
 for(let i=0;i<arr.length-1;i++){
  let minIndex = i;
  for(let j=i+1;j<arr.length;j++){
    if(arr[minIndex]>arr[j]){
      minIndex = j
    }
  }
  if(minIndex !== i){
    [arr[minIndex],arr[i]]= [arr[i],arr[minIndex]]
  }
 }
 return arr
}

console.log("Selection sort ",SelectionSort([3,45,2,12,54,5]));











const Sorting = () => {
  return <div className="text-white text-9xl ">Sorting</div>;
};

export default Sorting;
