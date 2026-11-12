/*
3. Promise.any()

Returns the first successful promise.

Ignores failures until all fail.
*/ 

const p1 = Promise.reject("Error 1")
const p2 = Promise.resolve("Success")
const p3 = Promise.resolve("Another Success")


Promise.any([p1, p2, p3]).then((result)=>{
    console.log('result : ', result)
})
//result : Success