const CountOccu = (str, character) => {

  // method 1

  {/*str = str.toLowerCase();
  character = character.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      count++;
      console.log(character);
    }
  }
return count;*/}


  // method 2 
  const words  = str.split("").reduce((acc,cur)=>{
    if(cur===character){
      acc++
    }
    return acc
  },0)

  return words
};

export default CountOccu;
console.log(CountOccu("MissIsippi", "i"));
