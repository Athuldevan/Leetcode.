function reverse(number: number): number {
    let num = Math.abs(number)
    let rev: number = 0;
    let rem: number = 0;
    while (num > 0) {
        rem = (num % 10);
        rev = (rev * 10) + rem
        num = Math.floor(num / 10)

    }

       let limit : number = Math.pow(2, 31)
    if (rev > limit || rev < -limit) return 0
    return (number < 0) ? -rev : rev
};