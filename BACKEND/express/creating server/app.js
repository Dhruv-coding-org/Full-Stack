const express = require('express')

const app = express()
//middleware registration
app.use(express.json())

//route is  a path where the server listen for the request
//route handler is a function that handles the requested route

//url(uniform resource locator):is the address of a resource on the internet, used to locate a webpage, image, file, or any resource.(it is a complete adress including protocol, domain, and path(route),params,query strings)
//eg:https://store.example.org/category/electronics/mobile/iphone/models?year=2024&ram=16gb&storage=256gb&color=black#reviews


//route handler registration
app.post('/profile/:userID', (req, res) => {
    console.log(req.url)
    console.log(req.body)
    console.log(req.params)
    res.send("welcome to home page")
   console.log("this is a home page")
})

app.post('/submit_data', (req, res) => {
     express.json() 
    console.log(req.body)
    console.log(req.url)

    res.send("data submitted successfully")
   console.log("data submission received")
})

app.listen(3000, () => {
    console.log('Server is on http://localhost:3000')
})
