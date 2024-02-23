


// 1- Import the module ‘fs’   (file system) to read and write files
let fs = require("fs");
// 2 - Write  a file rady.txt  with the content : Him is the best front end programmer

// 3 - Read the content of the file  rady.txt
let content = fs.readFileSync("./rady.txt").toString();

// 4 - Add to this content ‘But Ronan is the funniest’ and write again our file
let data = "But Ronan is the funniest";
fs.writeFile('rady.txt', data, (err) =>{
    console.log(content)
});