function isPalindrome(s: string): boolean {
    if (!s) return true;
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        } else {
            left++;
            right--;
        }

    }

    return true;

};