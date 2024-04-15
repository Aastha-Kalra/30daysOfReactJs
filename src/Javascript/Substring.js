const Substring = (str,subStr) => {
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    if(str.startsWith(subStr)){
        return true
    }
    else{
        return false
    }
}
console.log(Substring("Hello World", "hellow"));

export default Substring