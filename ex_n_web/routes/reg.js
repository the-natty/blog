var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reg', { title: 'Welcome', message: '' });
});

module.exports = router;
