 
 
 const express = require('express'); 

const app = express();

const port = 5500;

const localhost = '127.0.0.1'


app.get("",(req,res)=>{
    res.send("<h1>Hello Sayar nice to meet you</h1>");
})

app.get("/about",(req,res)=>{
    res.send({
        Name:"Kyaw Min Thant",
        Hobby:"Reading Book",
        age: 17
    })

})

app.get("/KyawMinThant",(req,res)=>{
    res.send("<h1>This is from KyawMinThant Page</h1>");
})

app.get("/lenovo",(req,res)=>{
    res.send("<h1>This is write with lenovo ideapad 3</h1>");
})

app.get("/bytheway",(req,res)=>{
    res.send("<h1>By the way I like writing code too.</h1>");
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.listen(port, localhost,()=>{
    console.log(`Server running at http://${localhost}:${port}`);
})

