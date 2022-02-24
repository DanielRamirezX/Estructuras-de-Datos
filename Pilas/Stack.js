class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.botttom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if(!this.top) {
            this.top = node;
            this.botttom = node;
        } else {
            const temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.top) return null;
        const temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp.value;
    }
}

const myStack = new Stack();