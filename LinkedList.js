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
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    delete() {
        if (this.head) {
            let firstNode = this.head;
            let nodesNumber = 1;
            while (firstNode.next) {
                nodesNumber++;
                firstNode = firstNode.next;
            }
            console.log(nodesNumber);

            let center = Math.ceil(nodesNumber / 2);
            let targetedNode = this.head;
            for (let i = 1; i < center - 1; i++) {

                targetedNode = targetedNode.next;
            }
            console.log(targetedNode);
            targetedNode.next = targetedNode.next.next;

        } else {
            console.log('the list is empty');
        }
    }

    insertTo(newAddedNode, place) {
        let baseNode = this.head;
        let counter = 1;
        while (baseNode.next) {
            if (counter == place - 1) {
                let newNode = new Node(newAddedNode);
                newNode.next = baseNode.next;
                baseNode.next = newNode;

            }
            baseNode=baseNode.next;
            counter++;
        }

    }

}
module.exports = LinkedList;