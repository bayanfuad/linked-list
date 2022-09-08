'use strict';
const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {  // ll is empty
            this.head = node;
        }
        else {  // ll is not empty
            node.next = this.head;
            this.head = node;
        }
    }
}
module.exports = LinkedList;