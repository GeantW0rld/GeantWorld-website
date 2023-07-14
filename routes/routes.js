const express = require('express')

const router = express.Router()

router.get('/api/v1/users', (req, res) => {
    res.send({
        username: "username",
        token: "tokenid"
    })
})

router.get('/profile', (req, res) => {
    res.status(403).send("403 : Not allowed")
})

module.exports = router