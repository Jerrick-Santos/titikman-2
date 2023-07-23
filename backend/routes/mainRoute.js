const express = require('express')
const {    getRestos,
    getResto,
    createResto,
    getThumbnail,
    getReviewsByUser,
    getReview,
    createReview,
    deleteReview,
    updateReview,
    createUser,
    getUser,
    editUser} = require('../controllers/mainController')

const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
// USERS

router.get('/profile/:id', getUser) //OK

router.patch('/profile/:id', editUser) //OK

router.post('/signup', createUser) //OK


// REVIEWS

router.get('/reviewsbyuser/:id', getReviewsByUser)

router.get('/review/:id', getReview) 

router.post('/reviewnew/:id', upload.single('image'), createReview) //OK -> resto id
 
router.delete('/review/:resto/:id', deleteReview) //OK -> restoid/reviewid

router.patch('/review/:resto/:id', upload.single('image'), updateReview) //OK -> restoid/reviewid

// RESTO

router.get('/restos', getRestos) //OK

router.get('/resto/:id', getResto) //OK

router.post('/restonew', createResto) //OK

// TEST ROUTES 



module.exports = router