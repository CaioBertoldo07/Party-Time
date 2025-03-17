const express = require("express")
const cors = require("cors")
const app = express()

// DB Connection
const conn = require("./db/conn")
conn()



app.use(cors())
app.use(express.json())
app.listen(3000, function () { })

// Routes
const routes = require("./routes/router")
app.use("/api", routes)