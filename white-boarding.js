// 1. Mirror Image Trees
// Problem: write an algorithm that returns `true` if a binary tree is a mirror image of another binary tree
function areMirrors(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return (
        node1.value === node2.value &&
        areMirrors(node1.left, node2.right) &&
        areMirrors(node1.right, node2.left)
    )
}

// 2. Reverse a Linked List
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // new head of the reversed list
}

// 3. The Missing Value
// Find the missing value in an array of numbers between 0 and the length of the list
function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return exptectedSum - actualSum;
}

// 4. Stack Min
// Problem: Design a stack with `push`, `pop`, and `min` functions, all operating in O(1) time

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    min() {
        return this.minStack[this.minStack.length - 1];
    }
}

// 5. Test a Retractable Ballpoint Pen
// problem: write test cases for a ballpoint pen

// • functional tests for clicking, retracting, and writing
// • edge cases for different writing angles, surfaces, and conditions
