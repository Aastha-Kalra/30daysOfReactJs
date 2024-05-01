const ObjectEmpty = (obj) => {
// 1st method
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return true;
//     }
//   }
//   return false


// 2nd method

return Object.keys(obj).length===0


};
console.log(ObjectEmpty({}));
console.log(ObjectEmpty({name:"aastha"}));
export default ObjectEmpty;
