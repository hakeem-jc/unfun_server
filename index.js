import express from "express";

const app = express();
const PORT = 3000;

// TODO - Fetch quotes from database
let temp_data = {id:1, quote:'temp quote', author:'Temp'};

app.get('/',(req,res) =>{
    res.json(temp_data);
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})