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

    append(value) {
        const node = new Node(value);
        if (!this.head) {  // ll is empty
            this.head = node;
        }
        else {  // ll is not empty
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
}
module.exports = LinkedList;