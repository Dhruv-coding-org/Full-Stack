// make a project to server a diffrent html file separately and style it using vanila css
// core module
const express=require("express")
const path=require("path")
//local module
const userRoutes=require('./routes/userRoutes')
const hostRoutes=require("./routes/hostRoutes")
const app=express()

//middle ware registration

//middleware1:getting url amd methd
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})

//middleware2:parsing body
app.use(express.urlencoded({ extended: true }));
//setting path of public folder
app.use(express.static(path.join(__dirname,"./","public")))


//middleware3:
app.use(userRoutes)

//middleware4:
app.use(hostRoutes)

// middleware4:
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"./","views","404.html"))
})


const port=3000
app.listen(port,(req,res)=>{
      console.log(`server is listning at ${port}`)
})