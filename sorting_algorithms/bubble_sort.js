//TIME COMPLEXITY: worst case - O(n^2) nearly sorted - O(n)
//BASIC IDEA: Sorting an array by repeatedly swapping adjacent elements. 

let arr = [4,1,56,3,12]

// swap function to use in bubbleSort
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

// basic implementation
function bubbleSortBasic(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]){
                swap(arr, i, j)
            }
        }
    }
    return(arr);
}

// better implementation: this function avoids swapping adjacent items that have already been sorted
function bubbleSortBetter(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return(arr); 
}

bubbleSortBetter(arr);

// partially sorted implementation: some arrays might already be partially/ nearly sorted
function bubbleSortPartial(arr){
    let noSwaps; 
    for(let i = arr.length; i > 0; i--){
        noSwaps = true; 
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false; 
            }
        }
    }
    if(noSwaps) break; 
    return(arr); 
}





