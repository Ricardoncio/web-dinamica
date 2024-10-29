const usuarios = {
    1: {
        user: "Francisco",
        email: "francisco@romero.es",
        passwd: "1234"
    },
    2: {
        user: "Ricardo",
        email: "ricardo@gmail.com",
        passwd: "1234"
    }
};

document.querySelector("form").addEventListener('submit', function (ev) {
    ev.preventDefault();
    
    const formData = new FormData(this);
    
    const params = {};
    formData.forEach((value,key) => {
        params[key] = value;

    });

    const userFound = Object.values(usuarios).find(user => user.email === params.email);
    let founded = false;

    if (userFound && userFound.passwd == params.passwd) {
        founded = true;

    } else if (userFound && userFound.passwd != params.passwd) {
        document.querySelector("p.errorMsg").textContent = "Password incorrecta";

    } else if (!userFound) {
        document.querySelector("p.errorMsg").textContent = "El usuario no existe :(";

    }

    if (founded) {
        window.location.href = "/inicio/" + userFound.user;

    }

})