class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.element = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if(!this.element) {
            this.element = node;
            this.last = node;
        }
        this.last.next = node;
        this.last = node;
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.element) return null;
        const temp = this.element;
        this.element = this.element.next;
        this.length--;
        return temp.value;
    }

    peek() {
        return this.element.value;
    }
}