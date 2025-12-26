const express=require("express")
const app=express()

const hostRoutes=express.Router()
hostRoutes.get("/host/add-home",(req,res)=>{
     res.send(`
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <h1>Register your home here:</h1>
    <form action="/host/add-home" method="POST">
       <input type="text" name="houseName" placeholder="enter the name of your house">
       <input type="submit">
    </form>
</body>
</html>
      `)
})
hostRoutes.post('/host/add-home',(req,res)=>{
     console.log(req.body)
       res.send(`
           <h1>successfulyy added your home </h1>
           <a href="/">Go to home</a>
        `)
})


module.exports=hostRoutes