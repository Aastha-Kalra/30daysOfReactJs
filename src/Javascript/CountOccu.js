const CountOccu = (str, character) => {
  str = str.toLowerCase();
  character = character.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      count++;
      console.log(character);
    }
  }
  return count;
};

export default CountOccu;
console.log(CountOccu("MissIsippi", "i"));
