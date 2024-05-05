const express = require('express')
const database = require('./config/database')
require("dotenv").config()
const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")
const systemConfig = require("./config/system")

database.connect()
const app = express()

const port = process.env.PORT

app.set('views', './views')
app.set('view engine', 'pug')

// app locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

app.use(express.static("public"))

// routes
route(app)
routeAdmin(app)

app.listen(port, () => { 
    console.log(`App listening on port ${port}`)
});

// "start": "nodemon --exec index.js"
