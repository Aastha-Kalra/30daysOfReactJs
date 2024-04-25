const Fibonaaci = (num) => {
  if(num<=1){
    return num
  }
else{
  return Fibonaaci(num-1)+Fibonaaci(num-2)
}
};
console.log(Fibonaaci(7));
export default Fibonaaci;
