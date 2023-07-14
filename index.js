const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/routes")

const app = express()
const port = 8080


app.listen(port, () => console.log(`online on http://localhost:${port}`))

app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.get("/api/v1/users", routes)

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/profile", routes)


module.exports = app