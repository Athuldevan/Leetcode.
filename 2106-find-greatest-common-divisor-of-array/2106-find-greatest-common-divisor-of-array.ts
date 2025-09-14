function findGCD(nums: number[]): number {
    let gcd: number = 1;
    let min: number = Math.min(...nums);
    let max: number = Math.max(...nums);

    for (let i = 2; i <= min; i++) {
        if ((min % i === 0) && (max % i === 0)) {
            if (gcd < i) {
                gcd = i
            }
        }
    }
    return gcd;

};