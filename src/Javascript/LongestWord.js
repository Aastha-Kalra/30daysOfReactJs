//   There is a question in which you have to find out the greatest string by
//  creating a function find_Largest_String. If there are multiple largest strings 
//  , it will encounter the very first one.

const LargestString =(str)=>{
    if(str.trim().length===0){
        return false
    }
    else{
       const words =  str.split(' ')
       const sorting = words.sort((a,b)=>a.length-b.length)
       return sorting.at(-1)
    }

}

console.log(LargestString("I am aastha Kalra"));

export default LargestString