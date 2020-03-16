var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Booky' });
});

router.get('/mijnwerkstukken', function(req, res, next) {
  res.render('layouts/mijnwerkstukken', { title: req.params.title });

  next()


},

function (req, res, next) {

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
let query = 'geschiedenis';
//  query = query.substring(1)
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Basic';
const refine = 'false'
const facet = 'language(dut)'
const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&${facet}&output=JSON`;

const config = {
  Authorization: `Bearer ${secret}`
};

  const fetch = require('node-fetch');
  fetch(url, config).then(data => data.text()).then(data => {
    console.log(JSON.parse(data.trim()))
  })
});

router.get('/onderwerp-kiezen', function(req, res, next) {


  res.render('layouts/onderwerp', { title: req.params.title, subjects:[
    "Geschiedenis",
    "Dieren",
    "Landen en Steden",
    "Sport en Hobby",
    "Natuur",
    "Bekende Personen",
    "Mens & Gezondheid",
    "Beroepen"
  ]},

  
  );

  console.log("zoeken!")
});

router.get('/:param', function(req, res, next) {

  console.log("param", req.params)
  console.log("hallo")

  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
let query = req.params;
//  query = query.substring(1)
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Basic';
const refine = 'false'
const facet = 'language(dut)'
const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&${facet}&output=JSON`;

const config = {
  Authorization: `Bearer ${secret}`
};

  const fetch = require('node-fetch');
  fetch(url, config).then(data => data.text()).then(data => {
    console.log(JSON.parse(data.trim()))
  })




  res.render('layouts/books', { title: req.params.title},


  
  );

  console.log("render boeken")
});

/* GET detail page. */
// router.get('/:stringparam', function(req, res, next) {
//   res.render('detail', { title: req.params.stringparam,
//   body: 'Dit is de body'});
// });

// router.get('/*', function(req, res, next) {
//   res.render('404', { title: req.params.stringparam,
//   body: 'Page not found!'});
// });





module.exports = router;
