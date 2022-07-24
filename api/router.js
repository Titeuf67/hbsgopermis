const fkdb = require("./config/db.json")
const express = require("express");
const router = express.Router()

// Router
router.get('/', function (req, res) {
    // res.redirect('/')
    res.render('home', {
        users: fkdb.users,
        articles: fkdb.articles
    })
})

router.get('/inscription', function (req, res) {
    res.render('inscription')
})
router.get('/pageIdAuto', function (req, res) {
    res.render('pageIdAuto')
})
router.get('/forminscription', function (req, res) {
    res.render('forminscription')
})
    router.get('/admin', function (req, res) {
        res.render("admin", {
            // Quand nous utilisons un layout qui n'est pas celui par default nous devons le spécifié
            layout: "adminLayout",
            users: fkdb.users,
            articles: fkdb.articles
        });

    })

    module.exports = router
