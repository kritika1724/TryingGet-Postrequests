const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register",(req,res)=>{
    res.send("standard get response");
});
app.post("/register",(req,res)=>{
    console.log(req.body);
    let {name , pass} = req.body;
    res.send(`standard post response ${name}`);
    
});
app.listen(port , ()=>{
console.log(`listening on port${port}`);
});