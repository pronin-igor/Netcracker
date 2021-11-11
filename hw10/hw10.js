let url = 'http://localhost:3000/posts';
let div = document.getElementById('posts');
let getButton = document.getElementById('getButton');
let setButton = document.getElementById('setButton');
let emailInput = document.getElementById('emailInput');

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

getButton.onclick = () => {
    let response = fetch(url)
        .then(response => response.json())
        .then(response => drawUsers(response))
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
