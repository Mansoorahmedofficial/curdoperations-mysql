const express = require("express")
const app = express()
const ejs = require("ejs")
const port = 7001
const dbconnect = require("./connections/connect")
// ConnectDB()
const user = require("./routers/User.rout.js")
const ConnectDB = require("./connections/connect")
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/user", user)
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    // res.send("working fine")
    res.render("index")
})

app.listen(port, ()=>console.log(`server is runing on http://localhost:${port}`))