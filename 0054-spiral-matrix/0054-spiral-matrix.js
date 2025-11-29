var spiralOrder = function(matrix) {
    // Handle edge case: empty matrix
    if (!matrix || matrix.length === 0) return [];
    
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let res = [];

    while (top <= bottom && left <= right) {
        // 1. Traverse Top Row (Left -> Right)
    
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        //  Traverse Right Column (Top -> Bottom)
        // 
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        // Traverse Bottom Row (Right -> Left)
        //  Check if top <= bottom to avoid re-traversing a row in non-square matrix
        if (top <= bottom) {
            for (let i = right; i >= left; i--) { // Fix: i-- instead of right--
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 4 Traverse Left Column (Bottom -> Top)
        
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
};
