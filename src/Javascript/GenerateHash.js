// Generate hashtag from given input string

const HashTag =(str)=>{
    if(str.length>280 || str.trim().length===0 ){
        return false
    }
    else{
        const word = str.split(" ")
        str =  word.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
        console.log(str);
        str = `@${str.join("")}`
        return str
    }
}

export default HashTag

console.log(HashTag("I am aastha here"));