const express=require("express")
const path=require("path")
const homeRoutesHandler=require("../controllers/homeRoutesHandler")
const homeRoutes=express.Router()

homeRoutes.get("/",homeRoutesHandler)


module.exports=homeRoutes
//__dirname gives the absolute path of the directory where the current file is located.