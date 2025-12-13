var countPrimes = function (n) {
    if (n <= 2) return 0;

    let result = 1; // prime number 2

    for (let i = 3; i < n; i += 2) {
        let count = 0;

        for (let j = 1; j * j <= i; j += 2) {
            if (i % j === 0) {
                if (j * j === i) count += 1;
                else count += 2;

                if (count > 2) break;
            }
        }

        if (count === 2) result++;
    }

    return result;
};
