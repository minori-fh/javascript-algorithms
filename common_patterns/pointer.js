// input: sorted array of integers (low to high) output: array that includes first pair where sum is 0 or undefined if it does not exist
// pointers from opposite directions

function sumZero(arr){
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right){
        if (arr[left] + arr[right] === 0){
            return([arr[left], arr[right]])
        } else if (arr[left] + arr[right] > 0){
            right--; 
        } else if (arr[left] + arr[right] < 0){
            left++;
        }
    }
    return false; 
}

// input: sorted array of integers (low to high) output: count of unique values
// pointers from the same direction

function countUniqueValues(arr){
    if (arr.length === 0) return 0; 

    let i = 0; 

    for (let j = 1; i < arr.length; i++){
        if(arr[i] != arr[j]){
            i++; 
            arr[i] = arr[j];
        }
    }
    return(i + 1)
}
