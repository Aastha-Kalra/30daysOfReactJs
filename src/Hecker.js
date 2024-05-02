// Hecker

let msg = new Promise((res, rej) => {
  for(let i=1;i<5;i++){
    setTimeout(() => {
        console.log("Initialzing Hacking.....");
        res("Fulfilled");
      }, 1000);
  }
}
)

msg.then((a) => {
    console.log(a);
});

