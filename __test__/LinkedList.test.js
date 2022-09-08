'use strict';
const LinkedList = require('../LinkedList');
describe('testing the linked list', () => {
    it('test creating new instance of ll', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    })
    describe('inserting node in the beginning of ll', () => {
        // if the ll is empty
        it('add node to an empty ll', () => {
            const ll = new LinkedList();
            ll.insert('c');
            expect(ll.head.value).toEqual('c');
            expect(ll.head.next).toBeNull();
        })
    })
    //  if the ll is not empty 
    it('add node to a not empty ll', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})