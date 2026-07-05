/**
 * Represents a node in a singly-linked list.
 * @class
 * @param {number} [val=0] - The value stored in the node
 * @param {ListNode|null} [next=null] - Reference to the next node in the list
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Contains operations for linked lists
 * @class
 */
class Solution {
  /**
   * Reverses a linked list iteratively
   * @param {ListNode} head - The head node of the list to reverse
   * @returns {ListNode} The new head of the reversed list
   */
  reverseList(head) {
    let node = head;
    let prev = null;
    while (node) {
      const nodeNext = node.next;
      node.next = prev;
      prev = node;
      node = nodeNext;
    }
    return prev
  }
}

/**
 * Converts an array of values into a linked list
 * @param {Array<number>} values - Array of values to convert
 * @returns {ListNode} Head node of the constructed linked list
 */
function listToLinkedList(values) {
  let node = new ListNode();
  const anchor = node;
  for (const value of values) {
    node.next = new ListNode(value);
    node = node.next;
  }
  return anchor.next
}

const values = [5, 2, 13, 3, 8];
const linkedList_1 = listToLinkedList(values);

/**
 * Converts a linked list back to an array
 * @param {ListNode} node - Head node of the linked list
 * @returns {Array<number>} Array containing the list values
 */
function linkedListToList(node) {
  const values = [];
  while (node) {
    values.push(node.val);
    node = node.next;
  }
  return values
}

// validation test case
const solution = new Solution();
console.log(
  'Actual output: ', 
  linkedListToList(solution.reverseList(listToLinkedList(values))),
  'Expected output: ',
  values.reverse())
console.log(linkedListToList(solution.reverseList(listToLinkedList(values))).toString() == values.reverse().toString())
