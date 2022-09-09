'use strict';
const LinkedList = require('../LinkedList');
describe('testing the linked list', () => {
    it('test creating new instance of ll', () => {
        const ll = new LinkedList();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    })
    describe('inserting node in the beginning of ll', () => {
        // if the ll is empty
        it('test adding node to an empty ll', () => {
            const ll = new LinkedList();
            ll.insert('c');
            expect(ll.head.value).toEqual('c');
            expect(ll.head.next).toBeNull();
        })
    })
    //  if the ll is not empty 
    it('test adding node to a not empty ll', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
    })
})

describe('append node to the end of ll', () => {
    // if the ll is empty
    it('test appending node to an empty ll', () => {
        const ll = new LinkedList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })
    //  if the ll is not empty 
    it('test appending node to a not empty ll', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })

})

describe('delete node in the middle of ll', () => {
    // if the ll is not empty
    it('test deleting node from the middle of a not empty ll', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        ll.append('d');
        ll.append('e');
        ll.delete();
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('d');
    })
})

describe('add a node in a specific place', () => {
    it('test inserting a node in a specific place', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('c');
        ll.append('d');
        ll.insertTo('b', 2);
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
    })
})