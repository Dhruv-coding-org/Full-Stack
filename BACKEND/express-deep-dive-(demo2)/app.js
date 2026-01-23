const express = require("express")

//core module
const app=express()

//local module
const userRoutes= require("./routes/user_routes")
const hostRoutes= require("./routes/host_routes")



app.use(express.urlencoded())
app.use(userRoutes)
app.use(hostRoutes)


app.listen(5000,()=>{
    console.log("server is running at port 5000")
})