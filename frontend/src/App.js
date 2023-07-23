import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from '../src/components/NavBar';
import SignUpForm from './pages/SignUp'
import LoginForm from './pages/LogIn';
function App(){
    return(
        <>
            <NavBar/>   
            <BrowserRouter>
                <Routes>
                    <Route
                    
                    path="/"
                    element={<LoginForm/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;