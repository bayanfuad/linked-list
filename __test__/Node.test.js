'use strict';
const Node = require('../Node');

describe('testing the node class', () => {
    it('test creating a node instance', () => {
        const value = 'bayan';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();

    })
});