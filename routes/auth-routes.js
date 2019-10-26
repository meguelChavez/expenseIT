const router = require('express').Router()

router.post("/login", (req, res) => {

})

router.get("/logout", (req, res) => {
    res.send("logout")
})

router.get("/google", (req, res) => {
    res.send("logging in with google")
})

module.exports = router