import React from 'react';
import sad from '../assets/sad.png';
import happy from '../assets/happy.png';



const ReviewCard = (props) => {
  return (

    <div className="container-fluid review-content p-3 bg-light mb-2">
      <div className="user-details row">

        
                    {props.userType==2 && (
                <div className="col-md-12">
                    <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editreview"
                    >
                        Edit
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm">
                        Delete
                    </button>
                    </div>
                </div>
                )}

        {/* EDIT REVIEW MODAL */}
        <div className="modal" id="editreview">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="review-section">
                <div className="container my-5">
                  <div className="review-section">
                    <h2>Edit Review</h2>
                    <form id="review-form">
                      <div className="mb-3">
                        <label htmlFor="rating" className="form-label">
                          Rating:
                        </label>
                        <select
                          id="rating"
                          name="rating"
                          required
                          className="form-select"
                        >
                          <option value="">Select a rating</option>
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                          <option value="3">&#9733;&#9733;&#9733;</option>
                          <option value="2">&#9733;&#9733;</option>
                          <option value="1">&#9733;</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="review" className="form-label">
                          Review:
                        </label>
                        <textarea
                          id="review"
                          name="review"
                          required
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="media" className="form-label">
                          Upload Media:
                        </label>
                        <input
                          type="file"
                          id="media"
                          name="media"
                          accept="image/*, video/*"
                          className="form-control"
                        />
                      </div>
                      <div>
                        <button type="submit" className="btn btn-danger">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* REVIEW CARD */}
        <div className="col-md-6">
          <div className="d-flex">
            <a href="Fredie.html">
            <div className="user-pfp me-2">
                <img
                    src={props.userProfilePic}
                    alt=""
                    style={{ borderRadius: '50%', width: '70px', height: '70px' }}
                />
                </div>

            </a>
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
            <span className="fas fa-star checked mx-1" style={{ marginTop: '11px', marginLeft: '0px',}}></span>
          </div>
        </div>
        <div className="col-md-12 my-3" id="text-content">
             <p className="text-content mb-1">
         {props.revContent}
      </p>
    </div>
                    <div className="d-flex mt-3">
                <img src={happy} salt="" />
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm d-flex gap-2 mt-1 happy unliked"
                    style={{ marginLeft: '4px', marginRight: '15px' }}
                    disabled={props.userType === 1}
                    >
                    {props.likes}
                    </button>

                <img src={sad} alt="" />
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm d-flex gap-2 mt-1 sad unliked"
                    style={{ marginLeft: '4px', marginRight: '15px' }}
                    disabled={props.userType === 1}
                >
                    {props.dislikes}
                </button>
                
                {props.reviewImg!=null && (
                        <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm d-flex gap-2 mt-1 see attachments"
                        style={{ marginLeft: '4px', marginRight: '15px' }}
                        data-bs-toggle="modal"
                        data-bs-target="#attachments"
                    >
                        See attachments
                    </button>
                )}
                

                {/* SEE ATTACHMENTS MODAL */}
                <div className="modal" id="attachments">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Attachments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={props.reviewImg} alt="Attachment" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        </div>
                    </div>
                    </div>



                    {props.userType==3 && props.hasOwnerResponse==false && (
                <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className="btn btn-danger btn-sm d-flex gap-2 mt-1 respond"
                    data-bs-toggle="modal"
                    data-bs-target="#respond"
                >
                    Respond
                </button>
                </div>
                )}


         <div class="modal" id="respond">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="review-section">
                     <div class="container my-5">
                        <div class="review-section">
                           <h2>Write a Response</h2>
                           <form id="review-form">
                                 <label for="review" class="form-label">Response:</label>
                                 <textarea id="review" name="review" required class="form-control"></textarea>
                              
                              <div>
                                 <button type="submit" class="btn btn-danger">Submit</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
                

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

                  {props.userType==3 && (
                        <div className="d-flex justify-content-end ">
                        <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editresponse"
                        >
                        Edit
                        </button>
                        <button type="button" className="btn btn-outline-danger btn-sm">
                        Delete
                        </button>
                    </div>
                )}

                    


                  </div>
                  {/* EDIT A RESPONSE MODAL */}
                  <div className="modal" id="editresponse">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="review-section">
                          <div className="container my-5">
                            <div className="review-section">
                              <h2>Edit Response</h2>
                              <form id="review-form">
                                <label htmlFor="review" className="form-label">
                                  Response:
                                </label>
                                <textarea
                                  id="review"
                                  name="review"
                                  required
                                  className="form-control"
                                ></textarea>
              
                                <div>
                                  <button type="submit" className="btn btn-danger">
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
