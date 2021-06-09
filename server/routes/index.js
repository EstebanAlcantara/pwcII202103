const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_req, res) => {
  res.render('index', {
    title: 'Express',
    author: 'Esteban Torres',
    Company: 'CompuMundo',
  });
});

router.get('/itgam', (_req, res) => {
  res
    .status(200)
    .json({ message: 'Bienvenido al mundo de la programacion fullstack' });
});

module.exports = router;
