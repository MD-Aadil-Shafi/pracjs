//a function which accept first argument and return
//anonymous function which take the second args... so on

const mul = (x) =>{
    return (y) =>{
        return (z) =>{
            return x*y*z;
        }
    }
}

console.log(mul(2)(3)(4))
//24

let newMul = mul(5);
let midMul = newMul(5);
let finalMul = midMul(10);
console.log(finalMul)
//250