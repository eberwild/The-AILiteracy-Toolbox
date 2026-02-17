import { useState } from "react";
import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/ResetPassword.css';

function ResetPassword () {

    const [ email , setEmail] = useState('');
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
                        onClick={() => {
                            
                        }}>
                    Get Reset Email
                </button>
            </div>
        </div>
    )
}

export default ResetPassword;