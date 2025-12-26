const express=require("express")
const userRoutes=express.Router();
userRoutes.get("/",(req,res)=>{
     res.send(`
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <h1>welcome to airbnb</h1>
    <a href="/host/add-home">Add Home</a>
</body>
</html>
    `)
})

module.exports=userRoutes

