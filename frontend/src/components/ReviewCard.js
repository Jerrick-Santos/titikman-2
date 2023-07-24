import React, { useState, useEffect, useRef } from 'react';


import sad from '../assets/sad.png';
import happy from '../assets/happy.png';

import axios from 'axios';
import EditReviewModal from './EditReviewModal';
import AttachmentsModal from './AttachmentsModal';
import ResponseModal from './ResponseModal';
import EditResponseModal from './EditResponseModal';



const ReviewCard = (props) => {
  const [reviewID, setReviewID] = useState('');
  useEffect(() => {
    setReviewID(props.reviewID);
  }, [props.reviewID]);


  const handleDelete = async () => {
    try {
      // Make an API call to delete the review from the database using the reviewID

      console.log('del 1  ' + props.reviewID);
      await axios.delete(`http://localhost:4000/api/review/${props.restoID}/${props.reviewID}`);
      console.log('del 2 ' + props.reviewID);
      // If the deletion is successful, you can trigger a callback to remove the review from the parent component's state.
     window.location.reload();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  
  const deleteResponse = async (e) => {
    
    const requestData = {
      hasOwnerResponse: false,
    };

    try {
      const response = await axios.patch(`http://localhost:4000/api/review/${props.restoID}/${props.reviewID}`, requestData);
      window.location.reload();
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleLike = async () => {
    if (!props.hasLiked) {
      // If user hasn't liked, add 1 to likes
      setLikes((prevLikes) => prevLikes + 1);
      // If user has disliked before, subtract 1 from dislikes
      if (props.hasDisliked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
      }
      // Update the like status in the database using the API call
      await updateLikesInDB(likes + 1, dislikes, true, false);
    }
  };

  const handleDislike = async () => {
    if (!props.hasDisliked) {
      // If user hasn't disliked, add 1 to dislikes
      setDislikes((prevDislikes) => prevDislikes + 1);
      // If user has liked before, subtract 1 from likes
      if (props.hasLiked) {
        setLikes((prevLikes) => prevLikes - 1);
      }
      // Update the dislike status in the database using the API call
      await updateLikesInDB(likes, dislikes + 1, false, true);
    }
  };

  const updateLikesInDB = async (likes, dislikes, hasLiked, hasDisliked) => {
    try {
      // Make an API call to update the like and dislike counts in the database
      // with the new values (likes and dislikes).
      // Replace the following URL and request data with your actual API endpoint and data structure.
      await axios.patch(
        `http://localhost:4000/api/review/${props.restoID}/${props.reviewID}`,
        {
          likes: likes,
          dislikes: dislikes,
        }
      );
    } catch (error) {
      console.error('Error updating like/dislike:', error);
    }
  };

  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (

    <div className="container-fluid review-content p-3 bg-light mb-2">
      <div className="user-details row">

        
                    {props.userType==2 && (
                <div className="col-md-12">
                    <div className="d-flex justify-content-end">
                    

                    <EditReviewModal restoID={props.restoID} reviewID={props.reviewID}/>

                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                        Delete
                    </button>

                    </div>
                </div>
                )}

       
        
        
        {/* REVIEW CARD */}
        <div className="col-md-6">
          <div className="d-flex">
            
            <div className="user-pfp me-2">
                <img
                    src={props.userProfilePic}
                    alt=""
                    style={{ borderRadius: '50%', width: '70px', height: '70px' }}
                />
                </div>

            
            <div className="user-content flex-column align-content-center mt-1">
                <p style={{ marginBottom: '3px', fontSize:'20px' }}>{props.username}</p>
                <p>{props.datePosted}</p>
                </div>

          </div>
        </div>
        <div className="col-md-6">
          <div className="rating d-flex justify-content-md-end align-content-center gap-2">
            <img src="assets/star.png" className="mt-2" id="star" alt="" />
            <p className="mt-2">  {props.userRating} </p>
          </div>
        </div>
        <div className="col-md-12 my-3" id="text-content">
             <p className="text-content mb-1">
             {isExpanded ? props.revContent : `${props.revContent.substring(0, 100)}...`}
              {isExpanded && <span className="hidden-content hide">{props.revContent}</span>}
      </p>
    </div>
    {props.revContent.length > 100 && (
            <button style={{marginLeft:'10px', width:'10%', fontSize:'12px'}} onClick={handleExpand} className="expand-link">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
    
                    <div className="d-flex mt-3">
                <img src={happy} alt="" />
                <button
        type="button"
        className={`btn btn-outline-success btn-sm d-flex gap-2 mt-1 happy ${props.hasLiked ? 'liked' : 'unliked'}`}
        style={{ marginLeft: '4px', marginRight: '15px' }}
        disabled={props.userType === 1 || props.userType === 2 || props.userType === 4}
        onClick={handleLike}
      >
        {likes}
      </button>

      <img src={sad} alt="" />
      <button
        type="button"
        className={`btn btn-outline-danger btn-sm d-flex gap-2 mt-1 sad ${props.hasDisliked ? 'liked' : 'unliked'}`}
        style={{ marginLeft: '4px', marginRight: '15px' }}
        disabled={props.userType === 1 || props.userType === 2 || props.userType === 4}
        onClick={handleDislike}
      >
        {dislikes}
      </button>
                
                <AttachmentsModal filename={props.filename}/>
      
                    {props.userType==4 && props.hasOwnerResponse==false && (
                <div className="d-flex justify-content-end">
                <ResponseModal restoID={props.restoID} reviewID={props.reviewID}/>
         
                </div>
                )}


        
        
                

                </div>

      </div>

     {/* OWNER RESPONSE */}
     {props.hasOwnerResponse && (
                <div className="d-flex">
                <div
                  className="container"
                  style={{
                      marginTop: '10px',
                    marginRight: '10px',
                    backgroundColor: '#DC3545',
                    width: '5%',
                  }}
                ></div>
                <div className="container-fluid review-content p-3 bg-light mb-2">
                  <div className="col-md-12">

                  {props.userType==4 && (
                        <div className="d-flex justify-content-end ">
                        <EditResponseModal restoID={props.restoID} reviewID={props.reviewID}/>
                  
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteResponse}>
                        Delete
                        </button>
                    </div>
                )}

                    


                  </div>
                
              
                  <div className="user-details row">
                    <div className="col-md-6">
                      <div className="d-flex">
                        <a href="OwnerProfile.html">
                        <div className="user-pfp me-2">
                            <img
                                src={props.ownerProfilePic}
                                alt=""
                                style={{ borderRadius: '50%', width: '70px', height: '70px' }}
                            />
                            </div>
                        </a>
                        <div className="user-content flex-column align-content-center mt-1">
                          <p style={{ marginBottom: '3px', fontSize:'20px' }}>Owner's Response</p>
                          <p>{props.responseDatePosted}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 my-3" id="text-content">
                      <p className="text-content mb-1">
                        {props.responseContent}
                      </p>
                      

                    </div>
                  </div>
                </div>
              </div>

                )}
    </div>
  );
};

export default ReviewCard;
