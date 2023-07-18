import React from 'react';
import search from '../assets/search.png';
import filter from '../assets/filter.png';



const ReviewSearch = (props) => {
  return (
    <>


        
      <div className="row d-flex">
        {props.userType!=1 && (
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

        

        <button
          type="submit"
          className="btn btn-danger btn-lg btn-block mb-3"
          style={{ marginLeft:'5px', width: '12%' }}
          data-bs-toggle="modal"
          data-bs-target="#search"
        >
          <img src={search} />
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
              style={{ height: '25px' }}
            />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Filter by Helpfulness
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Filter by Rating
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
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
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="searchInput"
                      placeholder="Search for a review"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-danger">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default ReviewSearch;
