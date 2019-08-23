//TIME COMPLEXITY: O(n)
// check for anagrams (a word that is formed by rearranging the letters of another)

function isAnagram(str1, str2){
    // if the string lengths are not equal, cannot be an anagram
    if (str1.length != str2.length) return false; 

    let lookup = {};
    // create a lookup object of letters and count for str1
    for (let i = 0; i < str1.length; i++){
        lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;
    }

    // iterate through str2 and...
    for (let i = 0; i < str2.length; i++){
        // check if lookup object contains the letter
        if (!lookup[str2[i]]){
            return false; 
        // if lookup object contains letter, decrease the count by 1 (if it tries to -1 when the count is 0, function will return false)
        } else {
            lookup[str2[i]] -= 1; 
        }
    }
    return true; 
}

isAnagram("aaz","azab")