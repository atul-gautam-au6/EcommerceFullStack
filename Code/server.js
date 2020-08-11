import express from 'express';
// import data from './serverside/data.js';
import productmodel from './serverside/Model/productmodel'
import userRoute from './serverside/routes/userRoutes'
import productRoute from './serverside/routes/productroute'
import dotenv from 'dotenv'
dotenv.config()
import db from './serverside/db';
import bodyParser from 'body-parser'

const port=process.env.PORT||6001


const app = express()
app.use(bodyParser.json())
app.use(productRoute)
app.use('/api/users',userRoute)
// app.use(productRoute)
// console.log(productmodel.name)

if(process.env.NODE_EVR==='production'){

    app.use(express.static('../clienside/build'))
}

app.listen(8001,()=>{
    console.log('server running at port number '+ 8001)
})