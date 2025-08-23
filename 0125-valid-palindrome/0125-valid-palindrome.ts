function isPalindrome(s: string): boolean {
    if (!s) return true;

    // Clean string: remove non-alphanumeric & lowercase
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    console.log("cleaned:", str);

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // mismatch found
        }
        left++;
        right--;
    }

    return true; // no mismatches found
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome(".,,"));     // true (empty after cleaning)
