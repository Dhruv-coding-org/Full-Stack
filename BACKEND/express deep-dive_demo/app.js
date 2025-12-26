const express = require('express');

const app = express();

//middler registration
//middleware1:parsing

app.use(express.urlencoded());




//route handler registration
app.get("/",(req,res)=>{
    res.send(`<h1>welcome to AIRBNB</h1>
        <br>

        <a href="/add_home">add home</a>
        
        `)

})

app.get("/add_home",(req,res)=>{
    res.send(`<h1>register your home here</h1>
        <br>
        <form action="/form_submitted" method="POST">

        <input type="text" name="house name" placeholder="enter your home name">
        <button>Submit</button>
    </form>
        `)

})



app.post("/form_submitted",(req,res)=>{
    console.log(req.body)
    res.send(`<h1>Your home is registered succesfully</h1>
        <br>
        <a href="/">home page</a>
        `)
})



app.listen(4000,()=>{
 console.log("server is listening at port 4000")
})
