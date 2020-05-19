const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'Titulo'});
    
})

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'contactico'});
})

module.exports = router;