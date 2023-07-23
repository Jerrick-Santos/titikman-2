
const {Resto, User, Review} = require('../models/MainModel')
const mongoose = require('mongoose')
const { MongoClient, ObjectId } = require('mongodb');
const e = require('express');
const { uploadFile } = require('../s3')

//USER REQUESTS

const createUser = async (req, res) => {
    const {userName, password, bio, userType} = req.body

    let icon = ""

    try {

        newUser = new User({userName, password, bio, icon, userType})
        
        newUser.save()

        .then((savedUser) => {
            console.log('New book saved to MongoDB:', savedUser);
        })
        .catch((error) => {
            console.error('Error saving new book:', error);
        });

        res.status(200).json({message: "New User Registered"})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found'})
    }

    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'User Not Found'})
    }

    res.status(200).json(user)
}


const editUser = async (req, res) => {
    const { id } = req.params

    let icon;
    if (req.file) {
        //filename = req.file.filename;
        //upload to S3 server
        try {
            const s3Response = await uploadFile(req.file)
            icon = s3Response.Location
            console.log(s3Response.Location)
        } catch (error) {
            console.error('File not uploaded to S3')
        }
    }
    else{

        const previousImage = await User.findOne(
            { _id: id }
          );
    
          if (!previousImage) {
            console.log('Restaurant or Review not found.');
            return;
          }
    
          icon = previousImage.icon;
          console.log(icon);
 
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No User Found'})
    }

    try {
        const user = await User.findOneAndUpdate({_id: id}, {
            ...req.body,
            "icon": icon
        })

        if(!user){
            return res.status(404).json({error: 'User Not Found'})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error})
    }

}

//REVIEW REQUESTS


const getReviewsByUser = async (req, res) => {

    const { id } = req.params

    try {

        const restos = await Review.find({user: id}).sort({createdAt: -1})


        res.status(200).json(restos)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


//get a single review
const getReview = async (req, res) => {
    const { id } = req.params

    console.log('hahha')

    try {

        const review = await Review.findById(id)

        res.status(200).json(review)
        
    } catch (error) {
        return res.status(400).json({error: error})
    }

    
}

//create a review

const createReview = async (req, res) => {

    const { id } = req.params 

    let filename;
    if (req.file) {
        //filename = req.file.filename;
        //upload to S3 server
        try {
            const s3Response = await uploadFile(req.file)
            filename = s3Response.Location
            console.log(s3Response.Location)
        } catch (error) {
            console.error('File not uploaded to S3')
        }
    }
    else{
        filename=""
    }

    //upload to S3 server
    // try {
    //     const s3Response = await uploadFile(req.file)
    //     filename = s3Response.Location
    //     console.log(s3Response.Location)
    // } catch (error) {
    //     console.error('File not uploaded to S3')
    // }


    let { 
            userRating, 
            revContent,
        } = req.body

    //get user id via session - insert code here 
    user = '64bcce85020188f67738d4df'//remove this when session has been implemented
    datePosted = new Date()
    likes = 0
    dislikes = 0 
    hasOwnerResponse = false 

    //add doc to db
    try{

        const resto = await Resto.findById(id)

        if (!resto){
            return res.status(404).json({error: 'No Resto Found'})
        }

        const newReview = new Review({            
            user, 
            datePosted, 
            userRating, 
            revContent,
            filename,
            likes, 
            dislikes,
            hasOwnerResponse})
        
        newReview.save()

        if (newReview == null){
            return res.status(404).json({error: 'Did not Create Review'})
        }

        resto.reviews.push(newReview)

        resto.save()

        res.status(200).json(resto)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

const deleteReview = async (req, res) => {
    const { resto, id } = req.params 

    console.log(resto)
    console.log(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Review Found'})
    }

    if(!mongoose.Types.ObjectId.isValid(resto)){
        return res.status(404).json({error: 'No Resto Found'})
    }


    try {

        //delete from review schema

        const review = await Review.findOneAndDelete({_id: id})

        if(!review){
            return res.status(404).json({error: 'Review Not Found'})
        }

        //delete from resto schema

        const deletedRev = await Resto.updateOne(
            { _id: resto },
            { $pull: { reviews: { _id: id } } }
          );
      
        res.status(200).json({message: "Resto has been deleted"})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


// update a review

const updateReview = async (req, res) => {
    const { resto, id } = req.params 
    const { userRating, revContent} = req.body;


    //Get previous URL of original review (unedited)
    // let filename;
    // if (req.file) {
    //     //filename = req.file.filename;
    //     //upload to S3 server
    //     try {
    //         const s3Response = await uploadFile(req.file)
    //         filename = s3Response.Location
    //         console.log(s3Response.Location)
    //         console.log("Uploaded Successfully to S3")
    //     } catch (error) {
    //         console.error('File not uploaded to S3')
    //     }
    // }
    // else{

    //     try {
    //         const previousImage = await Resto.find({ _id: resto, 'reviews._id': id }, { 'reviews.$': 1 })
    //         .select('reviews.filename') 
            
    //         if (!previousImage) {
    //             console.log('Restaurant or Review not found.');
    //             return;
    //         }
    
    //         filename = previousImage.file.filename
    //         console.log(filename)
    //     } catch (error) {
    //         console.error('Did not retrieve previous image')
    //     }

    // }


    let filename;
    if (req.file) {
        //filename = req.file.filename;
        //upload to S3 server
        try {
            const s3Response = await uploadFile(req.file)
            filename = s3Response.Location
            console.log(s3Response.Location)
        } catch (error) {
            console.error('File not uploaded to S3')
        }
    }
    else{

        const previousImage = await Resto.findOne(
            { _id: resto },
            { reviews: { $elemMatch: { _id: id } } }
          );
    
          if (!previousImage) {
            console.log('Restaurant or Review not found.');
            return;
          }
    
          filename = previousImage.reviews[0].filename;
          console.log(filename);
 
    }


    console.log(resto)
    console.log(id)
    console.log(filename)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Review Found'})
    }

    if(!mongoose.Types.ObjectId.isValid(resto)){
        return res.status(404).json({error: 'No Resto Found'})
    }


    try {

        //delete from review schema

        const review = await Review.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        if(!review){
            return res.status(404).json({error: 'Review Not Found'})
        }

        //delete from resto schema

        const updatedRev = await Resto.updateOne(
            { _id: resto, 'reviews._id': id },
            {
                $set: {
                  'reviews.$.userRating': userRating,
                  'reviews.$.revContent': revContent,
                  'reviews.$.filename': filename
                }
              }
            );
      
        res.status(200).json({message: "Resto has been updated"})
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


//RESTO REQUESTS

//get all restos 
const getRestos = async (req, res) => {

    try {

        const restos = await Resto.find({}).sort({createdAt: -1})


        res.status(200).json(restos)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const searchResto = async (req, res) => {

    const searchName = req.query.name;

  try {
    // Use a case-insensitive regex to perform the search
    const regex = new RegExp(searchName, 'i');

    // Perform the search in the 'restoName' field
    const restos = await Resto.find({ restoName: regex });

    res.status(200).json(restos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search for restaurants' });
  }

}

//get a single resto 
const getResto = async (req, res) => {
    const { id } = req.params

    const resto = await Resto.findById(id)

    if (!resto){
        return res.status(404).json({error: 'No Resto Found'})
    }

    res.status(200).json(resto)
}


const uploadAssets = async (req, res) => {

}

const uploadMenu = async (req, res) => {
    
}

// create a resto
const createResto = async (req, res) => {
    const {
            restoName, 
            thumbnail,
            avgRating, 
            assets,
            description, 
            restoUrl, 
            operatingHours, 
            contactNum, 
            menuImgs, 
            reviews, 
            userName, 
            password,
            userType
        } = req.body


    //add doc to db
    try{

        const owner = await User.create({userName, password, userType})

        if (owner == null){
            return res.status(404).json({error: 'Did not Create Owner'})
        }


        const resto = await Resto.create({
            restoName, 
            thumbnail,
            avgRating, 
            assets,
            description, 
            restoUrl, 
            operatingHours, 
            contactNum, 
            menuImgs, 
            reviews, 
            owner
        })
        res.status(200).json(resto)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}


//IMAGE REQUESTS


const getThumbnail = async (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = `${__dirname}/images/thumbnail/${imageName}`;

    res.sendFile(imagePath)
}

module.exports = {
    getRestos,
    searchResto,
    uploadMenu,
    uploadAssets,
    getResto,
    createResto,
    getThumbnail,
    getReview,
    getReviewsByUser,
    createReview,
    deleteReview,
    updateReview,
    createUser,
    getUser,
    editUser,
}