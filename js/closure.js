//a function remember certain
//variable value even after execution.


function counter(){
    let count = 0;
    return{
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}

let myCounter = counter();
console.log(myCounter.getCount())
console.log(myCounter.increment())
console.log(myCounter.getCount())
//0
// undefined
// 1

const createFullName = (firstName) =>{
    return (lastName) =>{
        return firstName + " " + lastName;
    }
}

let myFullName = createFullName("Aadil")
console.log(myFullName("Shafi"))
//Aadil Shafi