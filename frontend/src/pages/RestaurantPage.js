import RestaurantProfile from '../components/RestaurantProfile';
import ReviewSearch from '../components/ReviewSearch';
import ReviewCard from '../components/ReviewCard';
import jb1 from '../assets/jollibee/jb1.jpg';
import jb2 from '../assets/jollibee/jb2.jpg';
import jb3 from '../assets/jollibee/jb3.jpg';
import jbmenu1 from '../assets/jollibee/jb-menu-1.jpg';
import jbmenu2 from '../assets/jollibee/jb-menu-2.jpg';
import pfp from  '../assets/migz.jpg';
import ownerpfp from  '../assets/jerrick.jpg';

import {useState} from 'react'




var a = [jb1, jb2, jb3];
var b = [jbmenu1, jbmenu2];

const RestaurantPage = () => {
   
    var reviews = [
        <ReviewCard username="Fredie Argie" userProfilePic={pfp} datePosted="2014-02-09" userRating={3} 
        revContent="Jollibee is more than just a restaurant; it's an experience that brings joy and satisfaction 
                    to the whole family. From the delectable Chickenjoy that has become a staple on our table to 
                    the flavorful and filling spaghetti, Jollibee offers a wide array of mouthwatering dishes that 
                    cater to every family member's preferences"
        reviewImg={jb1} likes={100} dislikes={10} hasOwnerResponse={true} ownerProfilePic={ownerpfp} responseDatePosted="2015-03-05"
        responseContent="Thank you very much, you don't know how much your word means to us. "
        userType={2} />,
        <ReviewCard username="User 2" userProfilePic={pfp} datePosted="2014-02-09" userRating={3} 
        revContent="Hello World"
        reviewImg={jb1} likes={900} dislikes={10} hasOwnerResponse={true} ownerProfilePic={ownerpfp} responseDatePosted="2015-03-05"
        responseContent="Tangina mo"
        userType={1} />,
        <ReviewCard username="User 2" userProfilePic={pfp} datePosted="2014-02-09" userRating={3} 
        revContent="Hello"
        reviewImg={jb1} likes={20} dislikes={10} hasOwnerResponse={false} ownerProfilePic={ownerpfp} responseDatePosted="2015-03-05"
        responseContent="Thank you very much, you don't know how much your word means to us. "
        userType={1} />,
        <ReviewCard username="Fredie Argie" userProfilePic={pfp} datePosted="2014-02-09" userRating={3} 
        revContent="a"
        reviewImg={jb1} likes={150} dislikes={10} hasOwnerResponse={false} ownerProfilePic={ownerpfp} responseDatePosted="2015-03-05"
        responseContent="Thank you very much, you don't know how much your word means to us. "
        userType={2} />
    ];

    const [filteredReviews, setFilteredReviews] = useState(reviews);

        

        // Function to filter and sort reviews based on search and filter options
        const handleSearchAndFilter = (searchTerm, filterOption) => {
        let filtered = reviews;

        // Perform search based on searchTerm
            if (searchTerm) {
                filtered = filtered.filter(
                (review) =>
                    review.props.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    review.props.revContent.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

        // Perform sorting based on filterOption
        if (filterOption === 'helpfulness') {
            // Sort by helpfulness
            filtered.sort((a, b) => b.likes - a.likes);
        } else if (filterOption === 'rating') {
            // Sort by rating
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (filterOption === 'recent') {
            // Sort by most recent
            filtered.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
        }

        setFilteredReviews(filtered);
        };

    return(
        <>
        <div className='RestaurantPage'>
            <div class="container-fluid main-content px-5 py-3">
                <div class="row gx-3 gy-3">
                     <RestaurantProfile restoName="Jollibee" avgRating={4.1} assets={a} description='This is the description of Jollibee' 
                               menuImgs={b} restoURL='facebook.com' operatingHours='everyday' contactNum='8-7000'/>
            
                    <div class="col-lg-6  p-2">
                        <div class="container-fluid">
                            
                            <h1 class="mb-3">Reviews</h1>
                    <ReviewSearch userType={2} onSearchAndFilter={handleSearchAndFilter} />

                    {reviews}


                    
                     
                    
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        </>



    );
    
}

export default RestaurantPage;