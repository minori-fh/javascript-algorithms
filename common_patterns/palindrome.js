// check if a string is a palindrome (same spelled forwards and backwards) 

function isPalindrome(str){
    // once the recursive call is made with a string less than equal to 1, string is a palindrome!
    if (str.length <= 1) return true; 

    // if the first and last letter are equal, recursive call with the checked letters sliced
    if (str[0] === str.slice(-1)){
        return isPalindrome(str.slice(-1, 1));
    } else {
        return false; 
    }
}