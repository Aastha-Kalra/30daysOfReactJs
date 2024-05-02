const ObjectToArray = (obj) => {
  return Object.entries(obj);
};
const obj = {
  name: "Aastha",
  Age: 22,
};
let entries = Object.entries(obj);

console.log(ObjectToArray(obj));
console.log(entries.flat());  // array

export default ObjectToArray;
