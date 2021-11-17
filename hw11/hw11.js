let url = 'http://localhost:3000/posts';
let div = document.getElementById('posts');
let getButton = document.getElementById('getButton');
let setButton = document.getElementById('setButton');
let emailInput = document.getElementById('emailInput');
//-----из предыдущей домашки-----//
function drawUsers(response) {
    response.forEach((item) => {
        const author = document.createElement("h3");
        const title = document.createElement("p");
        author.innerHTML = item.author || 'No author';
        title.innerHTML = item.title || 'No content';
        div.appendChild(author);
        div.appendChild(title);
    })
}

setButton.onclick = () => {
    let val = emailInput.value;
    post.author = val;
    let response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    });
}

let post = {
    author: "New post",
    title: "New text"
}
//-----новая домашка-----//
getButton.onclick = () => {
    console.log("function start");
    setTimeout(() => {console.log("timeout1")}, 1000);
    let response = fetch(url)
        .then(response => {console.log("fetch сработал"); return response.json()})
        .then(response => {console.log("json сработал"); drawUsers(response); return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let checkbox = document.getElementById('checkbox');
                console.log("timeout2")
                if (checkbox.checked) {
                    resolve();
                } else reject()
            }, 2000)
        })})
        .then(response => console.log("new promise"))
        .catch(response => console.log("что-то пошло не так"))
    console.log("function end");
}