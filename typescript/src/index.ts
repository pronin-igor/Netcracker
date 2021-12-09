import { Tree } from "./Tree.js";
import { List } from "./List.js";

const buttonsDiv = document.createElement("div");
const inputsDiv = document.createElement("div");
const treeDiv = document.createElement("div");

const button = document.createElement("button");
button.classList.add("inputAndButton");
button.innerText = "Добавить элемент";
const button1 = document.createElement("button");
button1.classList.add("inputAndButton");
button1.innerText = "Посмотреть элемент";
const button2 = document.createElement("button");
button2.classList.add("inputAndButton");
button2.innerText = "Удалить элемент";

const input = document.createElement("input");
input.classList.add("inputAndButton");
input.type = "text";
const input1 = document.createElement("input");
input1.classList.add("inputAndButton");
input1.type = "text";
const input2 = document.createElement("input");
input2.classList.add("inputAndButton");
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

function showTree(list: List<number> | null, element: HTMLElement, transform: string): void {
    if (list != null) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("parentDivStyle");
        parentDiv.style.transform = transform;
        element.appendChild(parentDiv);
        const p = document.createElement("p");
        p.innerText = "" + list.data;
        p.classList.add("pStyle");
        parentDiv.appendChild(p);
        const childDiv = document.createElement("div");
        childDiv.classList.add("childDivStyle");
        parentDiv.appendChild(childDiv);
        showTree(list.left, childDiv, "translateX(-50px)");
        showTree(list.right, childDiv, "translateX(+50px)");
    }
}

function highlightElement(list: List<number> | null, element: HTMLElement, data: number, transform: string): void {
    if (list != null) {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("parentDivStyle");
        parentDiv.style.transform = transform;
        element.appendChild(parentDiv);
        const p = document.createElement("p");
        p.innerText = "" + list.data;
        p.classList.add("pStyle");
        if (list.data === data) {
            p.style.color = "red";
        }
        parentDiv.appendChild(p);
        const childDiv = document.createElement("div");
        childDiv.classList.add("childDivStyle");
        parentDiv.appendChild(childDiv);
        highlightElement(list.left, childDiv, data, "translateX(-50px)");
        highlightElement(list.right, childDiv, data, "translateX(+50px)");
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
    showTree(tree.root, treeDiv, "");
};

button1.onclick = (): void => {
    clearDiv(treeDiv);
    const field1 = input1.value;
    if (tree.search(tree.root, +field1) != null) {
        highlightElement(tree.root, treeDiv, +field1, "");
    } else {
        console.log("Элемент с заданным ключом не найден");
    }
};

button2.onclick = (): void => {
    clearDiv(treeDiv);
    const field2 = input2.value;
    tree.remove(tree.root, +field2);
    showTree(tree.root, treeDiv, "");
};

