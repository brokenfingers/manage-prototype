let menu = [];
async function loadMenu() {
    const requestUrl = './data/menu.json';
    const request = new Request(requestUrl);

    const response = await fetch(request);
    menu = await response.json();
    createMenu(menu);
}

function createMenu(obj) {
    const pizzaMenu = document.querySelector(".pizza-menu");
    for (itm of obj) {
        const li = document.createElement("li");
        li.textContent = itm.name;
        li.setAttribute("id", itm.id);
        li.addEventListener("click", () => console.log(this), true);
        pizzaMenu.appendChild(li);
    }
}

function onMenu() {

}

loadMenu();