let links = document.getElementsByTagName("li");
for (let li of links)
    li.addEventListener('click', function () {
        alert("listener сработал на li");
    })
let ul = document.getElementsByClassName("dropdown-menu-text")[0];
ul.addEventListener('click', function () {
    alert("listener всплыл на ul");
})