const express = require('express')
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors')
const aiRoutes = require('./routes/aiRoutes');

app.use(cors());
app.use(express.json());
app.use('/ai',aiRoutes);

app.get('/',(req,res)=>{
    res.send("Hello Word");
})
module.exports = app