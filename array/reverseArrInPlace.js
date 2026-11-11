//Reverse an Array (In-Place)

const arr = [1, 2, 3, 4, 5];

//using two pointer
//Time: O(n) | Space: O(1)

function revArr(arr){
    let left = 0, right = arr.length - 1;
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }    
    return arr;
}

console.log(revArr(arr))
//[ 5, 4, 3, 2, 1 ]