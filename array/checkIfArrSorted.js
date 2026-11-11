//Check if Array is Sorted

// eg:
const arr1 = [1, 2, 4, 7]; //true
const arr2 = [1, 5, 3]; //false


// Time: O(n) | Space: O(1)
//logic: If any element is smaller than the one before it, the array isn’t sorted.

function isSorted(arr){
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < arr[i-1]) return false;
    }
    return true;
}

console.log(isSorted(arr1)) //true
console.log(isSorted(arr2)) //false