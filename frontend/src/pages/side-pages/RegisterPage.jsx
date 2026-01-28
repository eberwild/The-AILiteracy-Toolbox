import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/RegisterPage.css';

function RegisterPage() {

const [registerData , setRegisterData] = useState({
    userEmail: '',
    userPassword: ''
})

const [show , setShow] = useState(false);

function changeVisibility(){
    setShow(!show);
}

    return(
        <>
            <div className="register-page">
            <MainHeader/>

            <div className="register-section">
            <h2>Register</h2>
                <input type="text"
                        placeholder='Email'
                        value={registerData.userEmail}
                        onChange={(event) => {
                            setRegisterData({...registerData , userEmail: event.target.value});
                        }}  />

                <input type={show ? 'text' : 'password'}
                       placeholder='Password'
                       value={registerData.userPassword}
                       onChange={(event) => {
                        setRegisterData({...registerData , userPassword: event.target.value});
                       }} />
                <button className='show-button'
                        type='button'
                        onClick={changeVisibility}>
                    Show Password
                </button>
                <button className='register-button'>
                    Login
                </button>
            </div>

            <p>
                Already got an account ? {" "} 
                    <Link to="/login"
                          className='login-link'>
                            Login here!
                    </Link>
            </p>

        </div> 
        </>
    )
}

export default RegisterPage;