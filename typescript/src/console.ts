import readlineSync from "readline-sync";
import { Tree } from "./Tree.js";
const tree = new Tree<number>();
let flag = true;
let el;
while (true && flag) {
    console.log("Чтобы добавить элемент в дерево нажмите 1");
    console.log("Чтобы извлечь элемент по ключу нажмите 2");
    console.log("Чтобы удалить элемент с заданным ключом нажмите 3");
    console.log("Чтобы вывести дерево нажмите 4");
    console.log("Для выхода из цикла нажмите 5");
    const num = readlineSync.question("");
    switch (+num) {
        case 1: console.log("Введите ключ элемента для добавления");
            el = readlineSync.question("");
            tree.insert(+el);
            break;
        case 2: console.log("Введите ключ элемента для извлечения");
            el = readlineSync.question("");
            console.log("Элемент:" + tree.search(tree.root, +el));
            break;
        case 3: console.log("Введите ключ элемента для удаления");
            el = readlineSync.question("");
            tree.remove(tree.root, +el);
            break;
        case 4: tree.traverse(tree.root);
        break;
        case 5: flag = false;
        break;
        default: console.log("Ввели что-то другое");
    }
}
