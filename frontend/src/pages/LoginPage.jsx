import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainHeader from "../components/MainHeader";
import '../styles/pages/LoginPage.css';

function LoginPage() {

// state to track ot passwort is shown or not
const [show , setShow] = useState(false);

// state to track the input value the user made
const [loginData , setLoginData] = useState({
    userEmail : '',
    userPassword : ''
})

// toggles passwort visibility
function changeVisibility(){
    setShow(!show);
}

    return(

        <>
        <div className="login-page">
            <MainHeader/>

            <div className="login-section">
            <h2>Login</h2>
                <input type="text"
                        placeholder='Email'
                        value={loginData.userEmail}
                        onChange={(event) => {
                            setLoginData({...loginData , userEmail: event.target.value});
                        }}  />

                <input type={show ? 'text' : 'password'}
                       placeholder='Password'
                       value={loginData.userPassword}
                       onChange={(event) => {
                        setLoginData({...loginData , userPassword: event.target.value});
                       }} />
                <button className='show-button'
                        type='button'
                        onClick={changeVisibility}>
                    Show Password
                </button>
                <button className='login-button'>
                    Login
                </button>
            </div>

            <p>
                No account yet ?{" "} 
                    <Link to="/register">Sign Up here!</Link>
            </p>

        </div> 
        </>
    )
}

export default LoginPage;