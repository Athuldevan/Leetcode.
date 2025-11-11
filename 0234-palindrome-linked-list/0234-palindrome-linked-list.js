/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    let prev = null;
    let curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    };


    //Checking wheather palindrome or not;
    let firstNode = head;
    let secondNode = prev;
    console.log(firstNode,secondNode)
    while (secondNode) {
        if (firstNode.val !== secondNode.val) {
            return false;
        };
        firstNode = firstNode.next;
        secondNode = secondNode.next;

    };
    return true;
};