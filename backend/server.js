require('dotenv').config()
const express = require('express')
const RestoRoutes = require('./routes/resto')
const ReviewRoutes = require('./routes/review')

//express app
const app = express()
//import mongoose dependency
const mongoose = require('mongoose')


//log tracker - middleware
app.use((req, res, next) => {
    console.log(req.path, res.method)
    next()
})

app.use(express.json())

//listen for requests 

//routes
app.use('/api/home',RestoRoutes)
app.use('/api/reviews', ReviewRoutes)


//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listens to PORT', process.env.PORT )
        })
    })
    .catch((err) => {
        console.log(err)
    })




