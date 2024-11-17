var express = require('express');
var router = express.Router();

const data = require("../data/dataprovider");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/inicio');
});
router.get('/inicio', function(req, res, next) {
  const username = "inicio";
  const carouselMovies = data.getCarouselMovies();
  res.render('index', {user:username, carouselMovies:carouselMovies});
});
router.get('/inicio/:user', function(req, res, next) {
  const carouselMovies = data.getCarouselMovies();
  res.render('index', {carouselMovies:carouselMovies});
});
router.get('/login', function(req, res, next) {
  res.render('login', {error: ""});
});
router.post('/check-login', function(req, res, next) {
  const user = data.checkLogin(req.body.email, req.body.passwd);
  if (user) {
    res.redirect('/inicio/' + user.user);
  } else {
    res.render('login', {error: "No se ha podido iniciar sesión, compruebe las credenciales"});
  }
});
router.get('/registro', function(req, res, next) {
  res.render('registro', {});
});
router.get('/recuperar-password', function(req, res, next) {
  res.render('recuperar-password', {});
});
router.get('/library/:user', function(req, res, next) {
  const user = req.params.user;
  res.render('library', {user: user, library: data.getUserLibrary(user)});
});
router.get('/copy/:user/:id', function(req, res, next) {
  const library = data.getUserLibrary(req.params.user);
  const copy = library.find((e) => e.id == req.params.id);
  res.render('copy', {copy: copy});
});


module.exports = router;
