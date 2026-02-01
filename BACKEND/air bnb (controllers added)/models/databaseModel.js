//fake data base 

const fs = require("fs")
const path = require("path")

const fakeDatabase=[]

class Home{
     constructor(homeName,pricePerNight,Location,rating,photourl){
         this.homeName=homeName
         this.pricePerNight=pricePerNight
         this.Location=Location
         this.rating=rating
         this.photourl=photourl
     }
     save(){
     //      const filepath= path.join(__dirname,"../","data","registeredHome.json")
     //    const data= JSON.stringify(this)
     //    fs.appendFile(filepath,data +"\n" ,(error)=>{
     //        if (error){
     //            console.log(error)
     //        }
     //        else{
     //            console.log("data is submitted successfully")
     //        }
     //      })
          fakeDatabase.push(this)
     }

     static fetchAll(){
          return fakeDatabase
     }
        
}

module.exports=Home
