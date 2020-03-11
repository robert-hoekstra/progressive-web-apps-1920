var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Swapi', category: ["Planets", "Ships", "Species", "Weapons"]  });
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
