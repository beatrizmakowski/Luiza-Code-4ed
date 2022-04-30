class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    visit() {
        //...
    }

    aux_print(node) {
        if (node === null) {
            return;
        }
        else {
            this.aux_print(node.left);
            console.log(node.value);
            this.aux_print(node.right);
        }
    }

    print() {
        return this.aux_print(this);
    }
}

const root = new Node(32);
root.left = new Node(12);
root.right = new Node(9);

root.print();