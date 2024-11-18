const movies = require("./movies.json");
const users = require("./users.json");

function getCarouselMovies() {
    let carouselMovies = [];
    
    for (let i = movies.length; i > movies.length - 6; i--) {
        const movie = movies.find((e) => e.id == i);
        carouselMovies.push(movie);

    }

    return carouselMovies;

}

function checkLogin(email, passwd) {
    let user = null;

    if (email != null && email != "" && passwd != null && passwd != "") {
        user = users.find((e) => e.email == email && e.passwd == passwd);
    }

    return user;

}

function getUserLibrary(user) {
    let library = [];

    if (user != null && user != "") {
        let copies = users.find((e) => e.user == user).copias;

        for (const copy of copies) {
            let movie = movies.find((e) => e.id == copy.id);
            movie.estado = copy.estado;
            movie.tipo = copy.tipo;
            library.push(movie);
        }
    }

    return library;

}

module.exports = {
    getCarouselMovies,
    checkLogin,
    getUserLibrary
}