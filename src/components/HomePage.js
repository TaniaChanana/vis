import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage() {
    let navigate = useNavigate();
    const userLogin = () => {
        navigate('/Login')
    }
    const userSignUp = () => {
        navigate('/Signup')
    }
   return (
        
        <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div class="jumbotron">
                <h1 class="display-4 text-center">WELCOME!!</h1>
                <div> 
                        <div className="container text-center">
                            <button type="submit" onClick={userLogin} class="btn btn-outline-primary">LOGIN</button>
                            <br/><br/>
                            <button type="submit" onClick = {userSignUp} class="btn btn-outline-primary">SIGN UP</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default HomePage;
