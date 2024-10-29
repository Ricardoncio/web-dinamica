/* JSON CON PELÍCULAS DE EJEMPLO PARA SIMULAR UNA BBDD RUDIMENTARIA */

const peliculas = {
    1: {
        titulo: "Seven",
        anho: 1995,
        tipo: "DVD",
        estado: "regular",
        generos:["Policíaca","Drama","Thriller"],
        director: "David Fincher",
        descripcion: "Dos detectives, un novato y un veterano, dano caza a un asesino en serie cuyo móvil son los sietes pecados capitales.",
        imagen: "/images/seven-poster.jpg"
    },
    2: {
        titulo: "Joker",
        anho: 2019,
        tipo: "BLUE-RAY",
        estado: "bien",
        generos:["Crimen","Drama","Thriller"],
        director: "Todd Phillips",
        descripcion: "En Gothan, Arthur Fleck, un comediante con problemas de salud mental, es marginado y maltratado por la sociedad. Se adentra en una espiral de crimen que resulta revolucionaria. Pronto conoce a su alter-ego, el joker.",
        imagen: "/images/joker-poster.jpg"
    },
    3: {
        titulo: "Gladiator",
        anho: 2000,
        tipo: "DVD",
        estado: "mal",
        generos:["Acción","Drama","Épica"],
        director: "Ridley Scott",
        descripcion: "Un exgeneral romano se propone vengarse del emperador corrupto que asesinó a su familia y lo envió a la esclavitud.",
        imagen: "/images/gladiator-poster.jpg"
    },
    4: {
        titulo: "300",
        anho: 2006,
        tipo: "DVD",
        estado: "bien",
        generos:["Acción","Drama","Épica"],
        director: "Zack Snyder",
        descripcion: "El rey Leónidas de Esparta y una fuerza de 300 hombres luchan contra los persas en las Termópilas en el año 480 a. C.",
        imagen: "/images/300-poster.jpg"
    },
    5: {
        titulo: "El Club de la Lucha",
        anho: 1999,
        tipo: "DVD",
        estado: "regular",
        generos:["Drama","Psicológico"],
        director: "David Fincher",
        descripcion: "Un oficinista insomne y un fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.",
        imagen: "/images/fight-club-poster.jpg"
    },
    6: {
        titulo: "Interstellar",
        anho: 2014,
        tipo: "BLUE-RAY",
        estado: "bien",
        generos: ["Aventura","Sci-fi","Drama"],
        director: "Christopher Nolan",
        descripcion: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la superviviencia de la humanidad.",
        imagen: "/images/interstellar-poster.jpg"
    }
};

const pathParts = window.location.pathname.split("/");
const username = pathParts[pathParts.length - 1];

function showButtonsAndUserCard() {
    const divBtns = document.querySelector(".buttons");

    if (username != "inicio") {
        const btn = document.createElement("a");
        btn.textContent = "BIBLITECA";
        btn.classList.add("btn");
        btn.href = "/library"
        divBtns.appendChild(btn);

        const header = document.querySelector("header");
        const userCard = document.createElement("a");
        userCard.href = "/library";
        userCard.classList.add("userCard");
        userCard.classList.add("btn");
        const userText = document.createElement("h2");
        userText.textContent = username;

        header.appendChild(userCard);
        userCard.appendChild(userText);

    } else if (username == "inicio") {
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
showButtonsAndUserCard();

function showMovieCards() {
    const carousel = document.querySelector("div#carousel");
    for (let key in peliculas) {
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.classList.add(key);
        let img = document.createElement("img");
        img.src = peliculas[key].imagen;
        img.alt = peliculas[key].imagen.split("/")[2];
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("inner");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = peliculas[key].titulo;

        carousel.appendChild(movieDiv);
        movieDiv.appendChild(img);
        movieDiv.appendChild(innerDiv);
        innerDiv.appendChild(div)
        div.appendChild(h2);

    }

}
showMovieCards();

document.querySelectorAll("div.movie").forEach((e) => {
    e.addEventListener('click', (event) => {
        const dialog = document.querySelector("dialog#lightbox");
        const form = dialog.querySelector("form");
        const id = e.className.split(" ")[1];
        
        dialog.querySelector("img").src = e.querySelector("img").src;
        form.querySelector(".title").textContent = peliculas[id].titulo;
        form.querySelector(".year").textContent = peliculas[id].anho + " " + peliculas[id].tipo + " [" + peliculas[id].estado + "]";
        form.querySelector(".genre").textContent =peliculas[id].generos
        form.querySelector(".director").textContent = "Dirigida por " + peliculas[id].director;
        form.querySelector(".descp").textContent = peliculas[id].descripcion;

        dialog.showModal();

    })

});

document.querySelector("div.contact a.btn").addEventListener('click', () => {
    const dialog = document.querySelector("dialog#contact");
    dialog.showModal();

});

document.querySelector("dialog.contact a.btn").href = window.location.pathname;