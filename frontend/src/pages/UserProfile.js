import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditUser from '../components/EditUser';


const UserProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const { id } = useParams();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [icon, setIcon] = useState('')
  const [bio, setBio] = useState('')


  useEffect(() => {
    // Fetch restaurant data
    axios.get(`http://localhost:4000/api/profile/${id}`)
      .then(response => {
        // Handle the successful response and update state variables
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setUserName(response.data.userName);
        setIcon(response.data.icon);
        setBio(response.data.bio);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error fetching restaurant data:', error);
      });



    const getUserReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/reviewsbyuser/${id}`);
            const jsonData = response.data; // Access the data property of the response
        
            if (jsonData) {
              setReviewData(jsonData);
            }
          } catch (error) {
            console.error('Error fetching user reviews:', error);
          }
    }

    getUserReviews()

  }, []);

  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    if (updateProfile) {
      axios
        .get(`http://localhost:4000/api/profile/${id}`)
        .then((response) => {
          // Handle the successful response and update state variables
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setUserName(response.data.userName);
          setIcon(response.data.icon);
          setBio(response.data.bio);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error fetching restaurant data:', error);
        });

      setUpdateProfile(false); // Reset the updateProfile state variable
    }
  }, [updateProfile]);

 


//   const fetchUserReviews = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/api/reviewsbyuser/${id}`);  // Replace with your backend API endpoint
//       if (response.ok) {
//         const data = await response.json();
//         setReviewData(data);
//         console.log(data)
//       }
//     } catch (error) {
//       console.error('Error fetching user reviews:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUserReviews();
//   }, []);

  // Handle edit profile submission
  const handleEditProfile = async (formData) => {
    try {
      const response = await fetch(`/api/profile/${profileData._id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        console.log(data)
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  // Handle review submission
  const handleCreateReview = async (formData) => {
    try {
      const response = await fetch(`/api/reviewnew/${profileData._id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setReviewData(data);
      }
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-4">
          <div className="container-fluid pt-2">
            <div className="row">
              <div className="col-sm-6">
                <div className="profile-container">
                  <div className="profile-icon">
                    <img src={icon}alt="Profile Picture" />
                  </div>

                  <h3> username: {userName}</h3>
                  <h3 className="profile-name">
                    {firstName} {lastName}
                  </h3>

                  <p>
                    {bio}
                  </p>
                  {/* ... */}

                  <EditUser bio={bio} userId={id} setUpdateProfile={setUpdateProfile}/>

                  <div className="modal fade" id="editprofile" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      {/* ... */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 pt-2">
          <div className="cards-container px-lg-4">
            <div className="row">
              {/* Display user reviews */}
              {reviewData.map((review) => (
                <div key={review._id} className="col-lg-4 col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{review.userRating}</h5>
                      <p className="card-text">{review.revContent}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;