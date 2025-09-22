function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const ans: boolean[] = [];

    for (let i: number = 0; i < candies.length; i++) {
        let isLargest: boolean = true;
        let sum: number = candies[i] + extraCandies;


        for (let j: number = 0; j < candies.length; j++) {
            if (sum < candies[j]) {
                isLargest = false;
                break;
            }
        }

        ans.push(isLargest);
    }

    return ans;
}

