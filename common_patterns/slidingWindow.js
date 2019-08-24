// input: array and an integer output: max sum of subarray with given length (int)
// *subarray = consecutive elements

function maxSubArray(arr, num){
    if (arr.length < num) return false; 

    let total = 0; 
    for (let i = 0; i < num; i++){
        total += arr[i];
    }

    let currentTotal = total; 
    for (let i = num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(currentTotal, total)
    }
    console.log(total); 
}

// maxSubArray([100,200,400,300,50], 2)

// input: array and an integer output: min length of subarray of which the sum is greater than or equal to the integer

function minSubarrayLen(arr, sum){
    
    let start = 0; 
    let end = 0; 
    let total = 0; 
    let minLen = Infinity; 

    while(start < arr.length){
        // if the sum is < int
        if (total < sum && end < arr.length){
            total += arr[end];
            end++; 
            // if the sum is at least int
        } else if (total >= sum){
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
            // the end of the array is reached; 
        } else {
            break; 
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

// minSubarrayLen([2, 3, 1, 2, 4, 3] , 7)

// input: string output: longest substring with distinct letters

function longestSubstring(str){
    let longest = 0; 
    let seen = {};
    let start = 0; 

    for (let i = 0; i < str.length; i++){
        
        if (seen[str[i]]){
            start = Math.max(start, start[str[i]]);
        } 

        longest = Math.max(longest, i - start + 1);
        seen[str[i]] = i + 1; 
    }
    return longest; 
}

longestSubstring("rithmschool")



