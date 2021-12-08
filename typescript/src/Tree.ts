import { List } from "./List.js";

export class Tree<T> {
    public root: List<T> | null;
    constructor() {
        this.root = null;
    }

    insert(data: T):  void {
        const newNode = new List<T>(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node: List<T>, newNode: List<T>): void {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node: List<T> | null, data: T): List<T> | null {
        if (node === null) {
            console.log("Не удалось найти элемент, возможно дерево пустое");
            return node;
        } if (data < node.data) {
            return this.search(node.left, data);
        } if (data > node.data) {
            return this.search(node.right, data);
        }
            return node;
        }

    min(node: List<T>): List<T> {
        if (node === null) {
            console.log("Дерево пустое");
            return node;
        }
        if (node.left === null) {
            return node;
        }
            return this.min(node.left);
    }

    remove(node: List<T> | null, data: T): List<T> | null {
        if (node === null) {
            console.log("Не удалось удалить элемент, возможно дерево пустое");
            return node;
        } if (data < node.data) {
            node.left = this.remove(node.left, data);
            return node;
        } if (data > node.data) {
            node.right = this.remove(node.right, data);
            return node;
        }
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            const newNode = this.min(node.right);
            node.data = newNode.data;
            node.right = this.remove(node.right, newNode.data);
            return node;
    }

    traverse(node: List<T> | null): void {
        if (node !== null) {
            this.traverse(node.left);
            this.traverse(node.right);
            console.log(node.data);
        }
    }

}
