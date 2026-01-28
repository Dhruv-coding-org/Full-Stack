const express=require("express")
const homeRoutes=require("./routes/homeRoutes")
const registerHomeRoutes=require("./routes/registerHomeRoutes")
const app=express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}))
app.use(homeRoutes)
app.use(registerHomeRoutes)
app.use(express.static("public"))

//creating a server
const port=5000;
app.listen(port,()=>{
    console.log(`server is listining at ${port}`)
})




