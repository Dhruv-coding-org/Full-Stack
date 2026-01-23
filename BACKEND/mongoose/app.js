const homeRegistration = require("./mongodb/mongoose")

let home= new homeRegistration("dhruv",9,"delhi")
home.save()

 