//fake data base 

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
          fakeDatabase.push(this)
     }

     static fetchAll(){
          return fakeDatabase
     }
        
}

module.exports=Home
