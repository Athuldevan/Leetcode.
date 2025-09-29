/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
  
    let ans = []
    for(let i = 0; i<order.length; i++) {
         let p = 0
        while(p < friends.length) {
            if (order[i] === friends[p] && !ans.includes(friends[p])) {
                ans.push(friends[p]);
            }
            p++
        }
    }
    return ans 
};
