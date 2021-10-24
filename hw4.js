class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchThree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (typeof newNode.data != typeof node.data) {
            console.log("WRONG TYPE");
            return;
        }
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else
                this.insertNode(node.right, newNode);
        }
    }
    traverse(node, repeat = 0) {
        if (node != null) {
            this.traverse(node.left, repeat + 6);
            this.traverse(node.right, repeat + 6);
            console.log(" ".repeat(repeat), node.data); //вывод в консоль немножко похожий на дерево
        }
    }
}

three = new BinarySearchThree();
let rand;
for (let i = 0; i < 10; i++) {
    rand = Math.round(Math.random() * (100 - 1) + 1);
    three.insert(rand);
}
three.traverse(three.root);
console.log(three);