import { useState } from "react";
import axios from 'axios';
import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/ResetPassword.css';

function RequestReset () {

    const [ email , setEmail] = useState('');

    async function sendResetLink(email){
        try {
            const response = axios.post('http://localhost:3000/api/users/reset-request' , {
                email: email
            });
            console.log(response);
        } catch(error){
            console.error('Reset Link could not be sent.' , error.message);
        }
    }
    return(

        <div className="reset-request-page">
            <MainHeader/>

            <div className="reset-request-section">
                <h2>Reset Password for:</h2>

                <input type="text" 
                        placeholder="Enter Your email here"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                />

                <button className="change-button"
                        onClick={ async() => {
                            await sendResetLink(email);
                        }}>
                    Get Email
                </button>
            </div>
        </div>
    )
}

export default RequestReset;