//TIME COMPLEXITY: worst case - O(n^2)
//BASIC IDEA: split array into a sorted and unsorted section

let arr = [1,4,56,3,12]

let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return(arr);
};

insertionSort(arr);

//*this algorithm works well when there is live data coming in 
