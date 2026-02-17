import MainHeader from "../../components/MainHeader";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ResetPage() {

    // states
    const [password , setPassword] = useState("");
    const [message , setMessage] = useState("");

    // params out of the URL query string
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    async function changePasswort(password , token){
        try {
            const response = await axios.post("http://localhost3000/api/users/password-change" , password , 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setMessage(response.data.message);
        } catch(error) {
            setMessage(error.response.data.message);
        }
    }

    return(

        <div className="change-page">
            <MainHeader/>
            <div className="change-section">
                <h2>Select a new Passwort:</h2>
                <input type="password"
                        value={password}
                        placeholder="New Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                />
                <button className="change-button"
                        onClick={async() => {
                            changePasswort(password , token);
                        }}>
                        Change Password
                </button>
                <p className="change-info">{message}</p>
            </div>
            
        </div>
    )
}

export default ResetPage;