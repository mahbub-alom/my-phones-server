const express=require("express");
const cors=require("cors")
const phones=require("./phones.json")
const app=express();
const port=5000;


app.use(cors());

app.get("/",(req,res)=>{
    res.send("server start very soon")
})

app.get("/phones",(req,res)=>{
    res.send(phones)
})

app.get("/phones/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const phone=phones.find(phone=>phone.id===id)||{};
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`server start on port ${port}`)
})