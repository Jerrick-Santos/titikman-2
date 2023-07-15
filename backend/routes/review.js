const express = require('express')

const {     getReview,
            getReviews,
            createResto,
            createReview} = require('../controllers/reviewController')

const router = express.Router()


//Get all Restaurants 
router.get('/', getReviews)

//Get a single Restaurant
router.get('/:id', getReview)

//Post a review 
router.post('/', createReview)


//Delete a review 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a Resto'})
})

//UPDATE a review 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a Resto'})
})

module.exports = router