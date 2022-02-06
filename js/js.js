let keyboardString = "1234567890qwertyuiopasdfghjklzxcvbnm";
let menu = [];
let filteredMenu = [];
let keyboardFilter = '';

function layoutKeyboard(keyTitles, keysInRow) {
    const keyboard = document.querySelector('.keyboard');
    let lastValue = 0;
    for (let n = 0; n < keysInRow.length; n++) {
        let row = document.createElement('div');
        row.classList.add("keyboard-row");
        keyboard.appendChild(row)
        for (let i = lastValue; i < lastValue + keysInRow[n]; i++) {
            const keyBtn = document.createElement('div');
            keyBtn.textContent = keyTitles[i];
            keyBtn.classList.add('keyboard-button');
            keyBtn.addEventListener("click", onkeyBtn);
            row.appendChild(keyBtn);
        }
        lastValue += keysInRow[n];
    }

}

function onkeyBtn() {
    keyboardFilter += this.textContent;
    filterMenu(menu, keyboardFilter);
    resetMenu();
    createMenu(filteredMenu);
}

function resetMenu() {
    const pizzaMenu = document.querySelector(".pizza-menu");
    const sushiMenu = document.querySelector(".sushi-menu");
    pizzaMenu.innerHTML = '';
    sushiMenu.innerHTML = '';

}

function filterMenu(obj, keyword) {
    filteredMenu = obj.filter(itm => itm.name.includes(keyword));
}

layoutKeyboard(keyboardString, [10, 10, 9, 7]);

async function loadMenu() {
    const requestUrl = './data/menu.json';
    const request = new Request(requestUrl);

    const response = await fetch(request);
    menu = await response.json();
    createMenu(menu);
}

function createMenu(obj) {
    const pizzaMenu = document.querySelector(".pizza-menu");
    const sushiMenu = document.querySelector(".sushi-menu");
    for (itm of obj) {
        const li = document.createElement("li");
        li.textContent = itm.name;
        li.setAttribute("id", itm.id);
        li.addEventListener("click", onMenu);
        if (itm.type == "pizza") {
            pizzaMenu.appendChild(li);
        } else {
            sushiMenu.appendChild(li);
        }

    }
}

function onMenu() {
    console.log(this.id);
}

loadMenu();