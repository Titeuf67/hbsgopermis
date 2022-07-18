const fkdb = require("./config/db.json")
const express = require("express");
const router = express.Router()

// Router
router.get('/', function (req, res) {
    res.render('home', {
        users: fkdb.users
    })
})

router.get('/inscription', function (req, res) {
    res.render('inscription')
})

router.get('/admin', function (req, res) {
    res.render("admin", {
        // Quand nous utilisons un layout qui n'est pas celui par default nous devons le spécifié
        layout: "adminLayout",
        users: fkdb.users
      });
    
})

module.exports = router
