const path=require("path")
const fs=require("fs")

class homeRegistration{
    constructor(houseName,rating,location){
        this.houseName= houseName
        this.rating=rating
        this.location=location
    }
    save(){
        const filepath= path.join(__dirname,"../","data","registeredHome.json")
        const data= JSON.stringify(this)
        fs.appendFile(filepath,data +"\n" ,(error)=>{
            if (error){
                console.log(error)
            }
            else{
                console.log("data is submitted successfully")
            }
        })
        
        const registeredHome=fs.readFile(filepath,"utf-8",(error,data)=>{
            if(error){
                console.log("error is:",error)
            }
            else{
                console.log("success")
            }

            console.log(data)
        })
        console.log(registeredHome)
    }
}

module.exports=homeRegistration
