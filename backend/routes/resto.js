const express = require('express')
const Review = require('../models/ReviewModel')
const {     getRestos,
            getResto,
            createResto} = require('../controllers/restoController')
    
const router = express.Router()


//Get all Restaurants 
router.get('/', getRestos)

//Get a single Restaurant
router.get('/:id', getResto)

//Post a review 
router.post('/', createResto)



module.exports = router