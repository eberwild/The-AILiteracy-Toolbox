import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/RegisterPage.css';

function RegisterPage() {

const registerNavigate = useNavigate();

const [registerData , setRegisterData] = useState({
    userEmail: '',
    userPassword: ''
})

const [show , setShow] = useState(false);

// function to toggle password visibility
function changeVisibility(){
    setShow(!show);
}

// function to register a new user 
async function registerUser(){
    try{
        const response = await axios.post('http://localhost:3000/api/users/register' , {
            email: registerData.userEmail,
            password : registerData.userPassword
        });
        if(response.status === 201){
            localStorage.setItem('token' , response.data.token);
            registerNavigate('/add-tool');
        } else {
            console.log(response.data.message);
        }
        
    }catch(err){
        // axios stores errors >=400 in err.response
        if(err.response) {
            console.error('Error from server' , err.response.data.message);
        } 
    }
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
                    {show ? "Hide Password" : "Show Password"}
                </button>
                <button className='register-button'
                        onClick={() => {
                            registerUser()
                        }}>
                    Register
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