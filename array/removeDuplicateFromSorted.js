//Remove Duplicates from Sorted Array (In-Place)

function removeDuplicates(arr){
    if(arr.length === 0) return 0;
    //i tracks the last unique element
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        //When arr[j] differs from arr[i], it’s new, so place it at i+1.
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1; //new length
}

const arr = [1, 1, 2, 2, 3];
console.log(removeDuplicates(arr)) //3 -> starting 3 are unique now
console.log(arr) //[ 1, 2, 3, 2, 3 ]
console.log(arr.splice(0, 3)) //[ 1, 2, 3 ]