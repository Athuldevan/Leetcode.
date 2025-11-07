/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    const set = new Set();
    let curr = head;
    console.log(curr.next)
    while (curr) {
        // If found null then its not cyclic LL but normal LL
        if (set.has(curr)) {
            return true;
        } else {
            set.add(curr);
            curr =  curr.next;
        }
    };
    console.log(set)
    return false;

};