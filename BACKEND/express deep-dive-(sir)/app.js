// core module
const express=require("express")
//local module
const userRoutes=require('./routes/User_routes')
const hostRoutes=require("./routes/Host_routes")
const app=express()

//middle ware registration

//middleware1:getting url amd methd
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})

//middleware2:parsing body
app.use(express.urlencoded({ extended: true }));


//middleware3:
app.use(userRoutes)

//middleware4:
app.use(hostRoutes)


const port=3000
app.listen(port,(req,res)=>{
      console.log(`server is listning at ${port}`)
})