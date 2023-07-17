
import img from '../assets/subway.jpg';
import jollibee from '../assets/jollibee.jpg';
import chicken from '../assets/24chicken.jpg';

import Banner from '../components/Banner'
import RestoCard from '../components/RestoCard'


const Home = () => {

    return(
        <>
        <div className='Home'>
            <Banner />

            <div className="container-fluid mt-3">
                <div className='row'>
                    <RestoCard restoImg={jollibee} restoName="Jollibee" description="This is the description of Jollibee" avgRating={3.2} />
                    <RestoCard restoImg={img} restoName="Subway" description="This is the description of Subway" avgRating={4.3} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                </div>

            </div>

        </div>
        
        </>



    );
    
}

export default Home;