 
 
 const express = require('express'); 

const app = express();

const port = 5500;

const localhost = '127.0.0.1'


app.get("",(req,res)=>{
    res.send("Hello this is for assignment");
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname + '/about.html')
})

app.get("/lenovo",(req,res)=>{
    res.sendFile(__dirname + '/lenovo.html');
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/movie", (req, res) => {
    res.sendFile(__dirname + '/movie.html')
})

app.listen(port, localhost,()=>{
    console.log(`Server running at http://${localhost}:${port}`);
})

