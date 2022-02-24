class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length ++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length --;
        return this.data;
    }

    add(value) {
        this.shiftRigthIndex(0);
        this.data[0] = value;
        return this.data;
    }

    addInIndex(index, value) {
        this.shiftRigthIndex(index);
        this.data[index] = value;
        return this.data;
    }

    shiftRigthIndex(index) {
        for(let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length ++;
        return this.data;
    }
}

const myArray = new MyArray(["Diego", "Gabriel", "Lucas"]);