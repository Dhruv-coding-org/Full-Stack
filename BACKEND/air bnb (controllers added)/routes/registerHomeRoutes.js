const express=require("express")
const registerHomeRoutes=express.Router()
const {registerHomeRoutesHandler,registerHomeRoutesSubmitHandler}=require("../controllers/registerHomeRoutesHandler")


registerHomeRoutes.get("/registerHome",registerHomeRoutesHandler)

registerHomeRoutes.post("/registerHome/submit",registerHomeRoutesSubmitHandler)


module.exports=registerHomeRoutes
//__dirname gives the absolute path of the directory where the current file is located.
