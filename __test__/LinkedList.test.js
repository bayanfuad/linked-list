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

describe('append node to the end of ll',()=>{
     // if the ll is empty
    it('append node to an empty ll', () =>{
        const ll = new LinkedList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })
     //  if the ll is not empty 
     it('add node to a not empty ll', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c')
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();
    })

})