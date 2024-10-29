var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/inicio');
});
router.get('/inicio', function(req, res, next) {
  res.render('index', {});
});
router.get('/inicio/:user', function(req, res, next) {
  const getUser = req.params.user;
  res.render('index', {user: getUser});
});
router.get('/login', function(req, res, next) {
  res.render('login', {});
});
router.get('/registro', function(req, res, next) {
  res.render('registro', {});
});
router.get('/recuperar-password', function(req, res, next) {
  res.render('recuperar-password', {});
});
router.get('/library', function(req, res, next) {
  res.render('library', {});
});


module.exports = router;
