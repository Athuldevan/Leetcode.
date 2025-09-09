function getNoZeroIntegers(n: number): number[] {
    for (let i = 1; i < n; i++) {
        let a = i;
        let b = n - i;

        // Convert both numbers to strings and check if they contain '0'
        if (!a.toString().includes('0') && !b.toString().includes('0')) {
            return [a, b];
        }
    }
    return [];
}

console.log(getNoZeroIntegers(11)); // ✅ Output: [2, 9]
