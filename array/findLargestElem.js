//easy level
//Find largest element

let arr = [3, 9, 2, 7];

//Time: O(n) | Space: O(1)
const findMax = (arr) => {
    let max = arr[0]
    for(let i =0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log("max is : ", findMax(arr));
//max is :  9