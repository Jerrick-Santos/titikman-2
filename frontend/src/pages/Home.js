
import img from '../assets/subway.jpg';
import jollibee from '../assets/jollibee.jpg';
import chicken from '../assets/24chicken.jpg';
import Banner from '../components/Banner'
import RestoCard from '../components/RestoCard'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import NavBar from '../components/NavBar';

const Home = () => {

    const [restos, setRestos] = useState(null)
    const userId = useState(Cookies.get('_id')) 
    const userType = useState(Cookies.get('userType')) 


    useEffect(() => {
        

        const fecthRestos = async () => {
            const response = await fetch('/api/restos')
            
            const json = await response.json()

            if(response.ok){
                setRestos(json)

            }

            
        }

        fecthRestos()
    }, [])


    return(
        <>
        <NavBar userIDcookies={userId} />
        <div className='Home'>
            <Banner />

            <div className="container-fluid mt-3">
                <div className='row'>
                    {restos && restos.map((resto) => (
                        <RestoCard restoId={resto._id} restoImg={resto.thumbnail} restoName={resto.restoName} description={resto.description} avgRating={resto.avgRating} />
                    ))}
                </div>

            </div>

        </div>
        
        </>



    );
    
}

export default Home;