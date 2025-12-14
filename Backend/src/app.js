const express = require('express')
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors')
const aiRoutes = require('./routes/aiRoutes');

app.use(cors({
    origin: 'https://ai-code-reviewer-frontend-8vn7.onrender.com/',
    credentials: true
}))
app.use(express.json());
app.use('/ai',aiRoutes);

app.get('/',(req,res)=>{
    res.send("Hello Word");
})
module.exports = app
