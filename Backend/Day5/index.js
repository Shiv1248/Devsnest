var fs= require("fs");
//to create a folder
fs.mkdirSync("HOLA");

//to create a file inside FIRST FOLDER
fs.writeFileSync("HOLA/index.txt","File inside HOLA");

//to update the text inside index.txt
fs.appendFileSync("HOLA/index.txt","\nHello I am appended text");

// to read the data inside index.txt
fs.readFileSync("HOLA/index.txt","utf-8");