const pathParts = window.location.pathname.split("/");
const username = pathParts[pathParts.length - 1];

function showButtonsAndUserCard(username) {
    const divBtns = document.querySelector(".buttons");

    if (username != "inicio") {
        const btn = document.createElement("a");
        btn.textContent = "BIBLITECA";
        btn.classList.add("btn");
        btn.href = "/library/" + username;
        divBtns.appendChild(btn);

        const header = document.querySelector("header");
        const userCard = document.createElement("a");
        userCard.href = "/library/" + username;
        userCard.classList.add("userCard");
        userCard.classList.add("btn");
        const userText = document.createElement("h2");
        userText.textContent = username;

        header.appendChild(userCard);
        userCard.appendChild(userText);

    } else {
        const btn1 = document.createElement("a");
        btn1.textContent = "INICIA SESION";
        btn1.classList.add("btn");
        btn1.href = "/login";
        const btn2 = document.createElement("a");
        btn2.textContent = "REGISTRATE";
        btn2.classList.add("btn");
        btn2.href = "/registro"
    
        divBtns.appendChild(btn1);
        divBtns.appendChild(btn2);

    }

}
showButtonsAndUserCard(username);

document.querySelector("div.contact a.btn").addEventListener('click', () => {
    const dialog = document.querySelector("dialog#contact");
    dialog.showModal();

});

document.querySelector("dialog.contact a.btn").href = window.location.pathname;