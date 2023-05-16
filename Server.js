const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const connectdb = require("./config/db")
const PORT = process.env.PORT || 8000

//dotevn configuring

dotenv.config();


//connecting to database
connectdb()

//listning on port 
app.listen(8000, () => {
    console.log(`server listning on port ${PORT}`);
})
