const Home=require("../models/databaseModel")
const HomeRoutesHandler=(req,res)=>{
    const registeredHomeData=Home.fetchAll()
     res.render("homePage.ejs",{registeredHomeData})
}

module.exports=HomeRoutesHandler

