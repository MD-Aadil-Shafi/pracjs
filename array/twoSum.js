let arr = [0, -1, 2, -3, 1, 4, 5]
let x = -2

function brute(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === x) return true;
        }
    }
    return false;
}

console.log(brute(arr))


// with object
function checkByObj(arr){
    let temp = {}
    for(let i = 0; i< arr.length; i++){
        let diff = x - arr[i]
        if(diff in temp) return true;
        temp[arr[i]] = arr[i]
    }
    return false;
}

console.log(checkByObj(arr))