const express=require("express")
const path=require('path')
const app=express()

const hostRoutes=express.Router()
hostRoutes.get("/host/add-home",(req,res)=>{
     res.sendFile(path.join(__dirname,"../","views",'addHome.html'))
})
hostRoutes.post('/host/added',(req,res)=>{
      console.log(req.body)
       res.sendFile(path.join(__dirname,"../","views","home-added.html"))
})


module.exports=hostRoutes
// __dirname gives the absolute path of the directory where the current file is located.