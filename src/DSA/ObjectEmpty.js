const ObjectEmpty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }
  return false
};
console.log(ObjectEmpty({}));
export default ObjectEmpty;
