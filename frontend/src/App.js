import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from '../src/components/NavBar';

function App(){
    return(
        <>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route
                    
                    path="/"
                    element={<Home/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;