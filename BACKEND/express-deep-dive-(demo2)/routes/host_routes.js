const express= require("express")
const file= require("fs")

const app= express()

const host_routes= express.Router()

host_routes.get("/add_home",(req,res)=>{
res.send(`<h1>register your home here</h1>
        <br>
        <form action="/form_submitted" method="POST">

        <input type="text" name="house_name" placeholder="enter your home name">
        <button>Submit</button>
    </form>
        `)


})



host_routes.post("/form_submitted",(req,res)=>{

    console.log(req.body)
    file.writeFileSync("client-Data.txt",JSON.stringify(req.body)+ "\n")
    res.send(`<h1>Your form is submitted`)
})

module.exports= host_routes

