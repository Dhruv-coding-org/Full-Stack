const express= require("express")

const app= express()

const user_routes= express.Router()

user_routes.get("/",(req,res)=>{
res.send(`<h1>welcome to AIRBNB</h1>
        <br>

        <a href="/add_home">add home</a>
        
        `)


})

module.exports= user_routes
