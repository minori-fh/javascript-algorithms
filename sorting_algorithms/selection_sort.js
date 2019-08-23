//TIME COMPLEXITY: worse case - O(n^2)
//BASIC IDEA: Find minimum value and move it to the beginning of the array

let arr = [4,1,56,3,12]

// swap function to use in selectionSort
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

// basic implementation
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                min = arr[j];
                swap(arr, i, j);
            }
        }
    }
    return(arr);
}

selectionSort(arr);