const Substring = (str,subStr) => {
    // method 1 

    // str = str.toLowerCase();
    // subStr = subStr.toLowerCase();

    // if(str.startsWith(subStr)){
    //     return true
    // }
    // else{
    //     return false
    // }


    // method 2

    return str.toLowerCase().slice(0,subStr.length) === subStr.toLowerCase()
}
console.log(Substring("HelloWorld", "hello"));

export default Substring