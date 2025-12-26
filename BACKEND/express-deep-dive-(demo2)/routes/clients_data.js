const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "client-Data.txt");

const raw = fs.readFileSync(filePath, "utf-8");
const data = JSON.parse(raw);

console.log(data.house_name);
































// const fs = require("fs");

// const raw = fs.readFileSync("../client-Data.txt", "utf-8");
// const data = JSON.parse(raw);

// console.log(data.house_name);
















































// const file= require("fs")
// const client_data= require(".../client-Data.txt")
// const data= JSON.parse(file.readFileSync("client-Data.txt","utf-8"))

// console.log(data.house_name)