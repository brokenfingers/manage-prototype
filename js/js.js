let keyboardString = "1234567890qwertyuiopasdfghjklzxcvbnm";
let menu = [];

function layoutKeyboard(string, keyboardParameter) {
    const keyboard = document.querySelector('.keyboard');
    let lastValue = 0;
    for (let n = 0; n < keyboardParameter.length; n++) {
        let row = document.createElement('div');
        row.classList.add("keyboard-row");
        keyboard.appendChild(row)
        for (let i = lastValue; i < keyboardParameter[n]; i++) {
            const keyBtn = document.createElement('div');
            keyBtn.textContent = string[i];
            row.appendChild(keyBtn);
        }
        lastValue = keyboardParameter[n];
    }

}

layoutKeyboard(keyboardString, [10, 20, 29, 36]);

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