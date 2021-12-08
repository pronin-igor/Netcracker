import { Tree } from "./Tree.js";
import { List } from "./List.js";

const buttonsDiv = document.createElement("div");
const inputsDiv = document.createElement("div");
const treeDiv = document.createElement("div");

const button = document.createElement("button");
button.innerText = "Добавить элемент";
const button1 = document.createElement("button");
button1.innerText = "Посмотреть элемент";
const button2 = document.createElement("button");
button2.innerText = "Удалить элемент";

const input = document.createElement("input");
input.type = "text";
const input1 = document.createElement("input");
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "text";

buttonsDiv.appendChild(button);
buttonsDiv.appendChild(button1);
buttonsDiv.appendChild(button2);

inputsDiv.appendChild(input);
inputsDiv.appendChild(input1);
inputsDiv.appendChild(input2);

document.body.appendChild(buttonsDiv);
document.body.appendChild(inputsDiv);
document.body.appendChild(treeDiv);

const tree = new Tree<number>();

function showTree(list: List<number> | null, element: HTMLElement): void {
    if (list != null) {
        const ul = document.createElement("ul");
        element.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li);
        const a = document.createElement("a");
        a.href = "#";
        a.innerText = "" + list.data;
        li.appendChild(a);
        showTree(list.left, ul);
        showTree(list.right, ul);
    }
}

function highlightElement(list: List<number> | null, element: HTMLElement, data: number): void {
    if (list != null) {
        const ul = document.createElement("ul");
        element.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li);
        const a = document.createElement("a");
        a.href = "#";
        a.innerText = "" + list.data;
        if (list.data === data) {
            a.style.color = "red";
        }
        li.appendChild(a);
        highlightElement(list.left, ul, data);
        highlightElement(list.right, ul, data);
    }
}

function clearDiv(element: HTMLElement): void {
    if (element != null) {
        element.innerHTML = "";
    }
}

button.onclick = (): void => {
    clearDiv(treeDiv);
    const field = input.value;
    tree.insert(+field);
    showTree(tree.root, treeDiv);
};

button1.onclick = (): void => {
    clearDiv(treeDiv);
    const field1 = input1.value;
    if (tree.search(tree.root, +field1) != null) {
        highlightElement(tree.root, treeDiv, +field1);
    } else {
        console.log("Элемент с заданным ключом не найден");
    }
};

button2.onclick = (): void => {
    clearDiv(treeDiv);
    const field2 = input2.value;
    tree.remove(tree.root, +field2);
    showTree(tree.root, treeDiv);
};

