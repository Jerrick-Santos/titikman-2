import banner_img from './assets/homedisplay.png';
import img from './assets/subway.jpg';
import jollibee from './assets/jollibee.jpg';
import chicken from './assets/24chicken.jpg';

const Banner = () => {
    return(
        <div className='row mt-4'>
            <img className="homedisplay" src={banner_img} alt='titikman-banner'/>
        </div>
    );

}


const Card = (props) => {
    return(
        <>
            <div className="col-md-4 mb-4">
                <div className="card">
                <a href="subway.html">
                    <img src={props.restoImg} className="card-img-top" alt="Food Image 1"/>
                </a>
                <div className="card-body">

                    <div className='d-flex justify-content-between align-items-center'>

                    
                        <h5 className="card-title">{props.restoName}</h5>

                        <div className='d-flex align-items-center rating'>
                            <span className="fas fa-star checked mx-1"></span>
                            <span className="rating-number">{props.avgRating}</span>
                        </div>

                    </div>

                    <p>{props.description}</p>
                </div>
                </div>
            </div>
        
        </>
    );
}

const Home = () => {

    return(
        <div className='Home'>
            <Banner />

            <div className="container-fluid mt-3">
                <div className='row'>
                    <Card restoImg={jollibee} restoName="Jollibee" description="This is the description of Jollibee" avgRating={3.2} />
                    <Card restoImg={img} restoName="Subway" description="This is the description of Subway" avgRating={4.3} />
                    <Card restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <Card restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <Card restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <Card restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                </div>

            </div>

        </div>


    );
    
}

export default Home;