const Vowel = (string) => {
    // method 1 

    // let count=0;
    // let str= string.toLowerCase()
    // for(let i=0;i<=str.length;i++){
    //     if(str[i]=='a' ||str[i]=='e' || str[i]=='i'||str[i]=='o'||str[i]=='u'){
    //         count++
    //     }
    // }
    // return console.log("Vowels are", count); 


    // method 2 

    let vowels = ['a','e','i','o','u']
    let arr = string.split("");
    let count =0;
    for(let char of arr ){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
return count
}
console.log(Vowel("Hello WOrld, I am Aastha Kalra"));
export default Vowel