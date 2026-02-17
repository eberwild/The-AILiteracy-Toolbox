import { useState } from "react";
import axios from 'axios';
import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/ResetPassword.css';

function RequestReset () {

    const [ email , setEmail] = useState('');
    const [ message , setMessage] = useState('');

    async function sendResetLink(email){
        try {
            const response = await axios.post('http://localhost:3000/api/users/reset-request' , {
                email: email
            });
            if( response.status === 200){
                setMessage(response.data.message);
            }
            
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
                <p className="user-info">{message}</p>
            </div>
        </div>
    )
}

export default RequestReset;