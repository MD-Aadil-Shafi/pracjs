/*
2. Promise.allSettled()

Waits for all promises to finish, regardless of success or failure.

*/

let start = Date.now()

function task1(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 1 completed");
            console.log('Task 1 completed in : ', Date.now() - start);
        }, time)
    })
}

function task2(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Task 2 failed.");
            console.log('Task 2 completed in : ', Date.now() - start);
        }, time)
    })
}


function task3(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Task 3 completed");
            console.log('Task 3 completed in : ', Date.now() - start);
        }, time)
    })
}


Promise.allSettled([task1(3000), task2(2000), task3(1000)]).then((value)=>{
    console.log("value", value)
})

/*
Task 3 completed in :  1000
Task 2 completed in :  2000
Task 1 completed in :  3000
value [
  { status: 'fulfilled', value: 'Task 1 completed' },
  { status: 'rejected', reason: 'Task 2 failed.' },
  { status: 'fulfilled', value: 'Task 3 completed' }
]
*/