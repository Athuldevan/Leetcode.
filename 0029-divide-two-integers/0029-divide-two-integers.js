var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (divisor === 0) throw new Error("Division by zero");
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    return Math.trunc(dividend / divisor);
};
