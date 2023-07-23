import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from '../src/components/NavBar';
import SampleForm from './pages/SignUp'

function App(){
    return(
        <>
            <NavBar/>   
            <BrowserRouter>
                <Routes>
                    <Route
                    
                    path="/"
                    element={<SampleForm/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;