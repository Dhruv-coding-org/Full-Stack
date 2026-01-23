const path=require("path")
const Home=require("../models/databaseModel")

const registerHomeRoutesHandler=(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","registerHomePage.html"))}

const  registerHomeRoutesSubmitHandler=(req,res)=>{
     console.log(req.body)
     const home=new Home(req.body.homeName,req.body.pricePerNight,req.body.Location,req.body.rating,req.body.photourl)
     home.save()
     res.sendFile(path.join(__dirname,"../","views","successPage.html"))
}

exports.registerHomeRoutesHandler=registerHomeRoutesHandler
exports.registerHomeRoutesSubmitHandler=registerHomeRoutesSubmitHandler

