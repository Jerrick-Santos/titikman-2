
import img from '../assets/subway.jpg';
import jollibee from '../assets/jollibee.jpg';
import chicken from '../assets/24chicken.jpg';
import Banner from '../components/Banner'
import RestoCard from '../components/RestoCard'
import { useEffect, useState } from 'react';


const Home = () => {

    const [restos, setRestos] = useState(null)

    useEffect(() => {
        const fecthRestos = async () => {
            const response = await fetch('/api/home')

            const json = await response.json()

            if(response.ok){
                setRestos(json)
            }
        }

        fecthRestos()
    }, [])


    return(
        <>
        <div className='Home'>
            <Banner />

            <div className="container-fluid mt-3">
                <div className='row'>
                    {restos && restos.map((resto) => (
                        <RestoCard key={resto._id} restoImg={"http://localhost:4000/images/thumbnail/" + resto.thumbnail} restoName={resto.restoName} description={resto.description} avgRating={resto.avgRating} />
                    ))}
                    {/* <RestoCard restoImg={jollibee} restoName="Jollibee" description="This is the description of Jollibee" avgRating={3.2} />
                    <RestoCard restoImg={img} restoName="Subway" description="This is the description of Subway" avgRating={4.3} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} />
                    <RestoCard restoImg={chicken} restoName="24 Chicken" description="This is the description of 24 Chicken" avgRating={2.1} /> */}
                </div>

            </div>

        </div>
        
        </>



    );
    
}

export default Home;