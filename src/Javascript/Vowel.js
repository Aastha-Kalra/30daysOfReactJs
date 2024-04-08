const Vowel = (string) => {
    let count=0;
    let str= string.toLowerCase()
    for(let i=0;i<=str.length;i++){
        if(str[i]=='a' ||str[i]=='e' || str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++
        }
    }
    return console.log("Vowels are", count); 

}
Vowel("Hello WOrld, I am Aastha Kalra")
export default Vowel