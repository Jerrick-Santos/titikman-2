import React, { useState, useEffect } from 'react';
import RestaurantProfile from '../components/RestaurantProfile';
import ReviewCard from '../components/ReviewCard';
import jb1 from '../assets/jollibee/jb1.jpg';
import jb2 from '../assets/jollibee/jb2.jpg';
import jb3 from '../assets/jollibee/jb3.jpg';
import jbmenu1 from '../assets/jollibee/jb-menu-1.jpg';
import jbmenu2 from '../assets/jollibee/jb-menu-2.jpg';
import pfp from '../assets/migz.jpg';
import pfp2 from '../assets/caloy.jpg';
import ownerpfp from '../assets/jerrick.jpg';
import search from '../assets/search.png';
import filter from '../assets/filter.png';

const RestaurantPage = () => {
  var a = [jb1, jb2, jb3];
  var b = [jbmenu1, jbmenu2];
  var userType = 2;
  var currUsername = "New Reviewer";
  var currPfp = pfp2;

  var reviews = [
    <ReviewCard
      username="Fredie Argie"
      userProfilePic={pfp}
      datePosted="2016-02-09"
      userRating={3}
      revContent="Jollibee is more than just a restaurant; it's an experience that brings joy and satisfaction to the whole family. From the delectable Chickenjoy that has become a staple on our table to the flavorful and filling spaghetti, Jollibee offers a wide array of mouthwatering dishes that cater to every family member's preferences"
      reviewImg={jb1}
      likes={100}
      dislikes={10}
      hasOwnerResponse={true}
      ownerProfilePic={ownerpfp}
      responseDatePosted="2017-03-05"
      responseContent="Thank you very much, you don't know how much your word means to us. "
      userType={2}
    />,
    <ReviewCard
      username="User 2"
      userProfilePic={pfp}
      datePosted="2014-02-09"
      userRating={2}
      revContent="Hello World"
      reviewImg={jb1}
      likes={900}
      dislikes={10}
      hasOwnerResponse={true}
      ownerProfilePic={ownerpfp}
      responseDatePosted="2015-03-05"
      responseContent="Tangina mo"
      userType={1}
    />,
    <ReviewCard
      username="User 2"
      userProfilePic={pfp}
      datePosted="2015-02-09"
      userRating={4}
      revContent="Hello"
      reviewImg={jb1}
      likes={20}
      dislikes={10}
      hasOwnerResponse={false}
      ownerProfilePic={ownerpfp}
      responseDatePosted="2015-03-05"
      responseContent="Thank you very much, you don't know how much your word means to us. "
      userType={1}
    />,
    <ReviewCard
      username="Fredie Argie"
      userProfilePic={pfp}
      datePosted="2013-02-09"
      userRating={5}
      revContent="a"
      reviewImg={jb1}
      likes={150}
      dislikes={10}
      hasOwnerResponse={false}
      ownerProfilePic={ownerpfp}
      responseDatePosted="2015-03-05"
      responseContent="Thank you very much, you don't know how much your word means to us. "
      userType={2}
    />,
  ];

  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [newReview, setNewReview] = useState(null);
  

  useEffect(() => {
    handleSearchAndFilter(searchTerm, filterOption);
  }, [searchTerm, filterOption]);

  useEffect(() => {
    if (newReview) {
      setFilteredReviews((prevReviews) => {
        const updatedReviews = [...prevReviews];
        updatedReviews.push(newReview);
        return updatedReviews;
      });
    }
  }, [newReview]);

  const handleSearchAndFilter = (searchTerm, filterOption) => {
    let filtered = [...filteredReviews];
  
    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.props.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.props.revContent.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (filterOption === 'helpfulness') {
      filtered.sort((a, b) => b.props.likes - a.props.likes);
    } else if (filterOption === 'rating') {
      filtered.sort((a, b) => b.props.userRating - a.props.userRating);
    } else if (filterOption === 'recent') {
      filtered.sort((a, b) => new Date(b.props.datePosted) - new Date(a.props.datePosted));
    }
  
    setFilteredReviews(filtered);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = document.getElementById('rating').value;
    const reviewText = e.target.elements.review.value;
    console.log(reviewText);
  
    const newReview = (
      <ReviewCard
        username={currUsername}
        userProfilePic={currPfp}
        datePosted={new Date().toISOString().split('T')[0]}
        userRating={Number(rating)}
        revContent={reviewText}
        reviewImg={null}
        likes={0}
        dislikes={0}
        hasOwnerResponse={false}
        ownerProfilePic={ownerpfp}
        responseDatePosted=""
        responseContent=""
        userType={2}
      />
    );
  
    setFilteredReviews((prevReviews) => [...prevReviews, newReview]);
    setSearchTerm('');
    setFilterOption('');
    document.getElementById('review-form').reset();
  };

  
  
  
  
  

  return (
    <>
      <div className="RestaurantPage">
        <div className="container-fluid main-content px-5 py-3">
          <div className="row gx-3 gy-3">
            <RestaurantProfile
              restoName="Jollibee"
              avgRating={4.1}
              assets={a}
              description="This is the description of Jollibee"
              menuImgs={b}
              restoURL="facebook.com"
              operatingHours="everyday"
              contactNum="8-7000"
            />

            <div className="col-lg-6 p-2">
              <div className="container-fluid">
                <h1 className="mb-3">Reviews</h1>

                <div className="row d-flex">
                  {userType !== 1 && (
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg btn-block mb-3"
                      style={{ width: '74%' }}
                      data-bs-toggle="modal"
                      data-bs-target="#review"
                    >
                      Write a Review
                    </button>
                  )}

                  <div className="modal" id="review">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="review-section">
                          <div className="container my-5">
                            <div className="review-section">
                              <h2>Write a Review</h2>
                              <form onSubmit={handleSubmit} id="review-form">
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
                                  <button type="submit" data-bs-dismiss="modal" className="btn btn-danger">
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

                  <button
                    type="submit"
                    className="btn btn-danger btn-lg btn-block mb-3"
                    style={{ marginLeft: '5px', width: '12%' }}
                    data-bs-toggle="modal"
                    data-bs-target="#search"
                  >
                    <img src={search} alt="Search" />
                  </button>

                  <div className="dropdown" style={{ width: '12%' }}>
                    <button
                      className="btn btn-danger btn-lg btn-block mb-3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="img-fluid"
                        src={filter}
                        alt="Filter"
                        style={{ height: '25px' }}
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setFilterOption('helpfulness')}
                        >
                          Filter by Helpfulness
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setFilterOption('rating')}
                        >
                          Filter by Rating
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setFilterOption('recent')}
                        >
                          Filter by Most Recent
                        </a>
                      </li>
                    </ul>
                  </div>

                                <div
                        className="modal"
                        id="search"
                        tabIndex="-1"
                        aria-labelledby="searchModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="searchModalLabel">
                                Search for a Review
                              </h5>
                             
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <input
                                    type="search"
                                    className="form-control"
                                    id="searchInput"
                                    placeholder="Search for a review"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                  />
                                </div>
                                <div className="text-center">
                                  <button type="submit" data-bs-dismiss="modal" className="btn btn-danger">
                                    Search
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                </div>

                {filteredReviews.map((review, index) => (
                  <div key={index}>{review}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;