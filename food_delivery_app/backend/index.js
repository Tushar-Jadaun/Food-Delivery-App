const express = require('express')
const app = express()
const port = 4000;
// app.use()
require('dotenv').config();

const mongoDB=require('./db');
mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello baby!')
})
app.use(express.json())
app.use('/api',require("./routes/Createuser"));

app.listen(port,()=>{
    console.log(` app is running on port ${port}`);
    
})