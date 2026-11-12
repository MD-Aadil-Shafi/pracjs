/*
1. Promise.all()

Waits for all promises to succeed.

If any one promise fails, the entire promise fails immediately.
*/ 

let start = Date.now()

function task1(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 1 completed");
            console.log("Task 1 completed. Time: ", Date.now() - start)
        }, time)
    })
}

const task2 = (time) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 2 completed")
            console.log("Task 2 completed. Time : ", Date.now() - start)
        }, time)
    })
}

Promise.all([task1(3000), task2(2000)]).then((value)=>{
    console.log('value', value);
})

/*
Task 2 completed. Time :  2003
Task 1 completed. Time:  3000
value [ 'Task 1 completed', 'Task 2 completed' ]
*/ 