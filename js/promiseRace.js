/*
Promise.race()

Returns the first promise that settles
 (success OR failure).
*/ 

const p1 = new Promise(resolve=> 
    setTimeout(()=> resolve("A"), 2000)
)

const p2 = new Promise((resolve, reject) =>
    setTimeout(()=> reject("B"), 1000)
)

Promise.race([p1, p2]).then(result => console.log(result))
.catch((err)=>{
    console.log("error", err)
});
//error B as rejected