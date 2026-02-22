import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import '../styles/components/BlackboardEntry.css';

function BlackboardEntry({ id , email , message , created_at , userID}) {

    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    let currentUserId ;

    if(token){
        const decoded = jwtDecode(token);
        console.log(decoded);
        currentUserId = decoded?.id ? Number(decoded.id) : null;
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${API_URL}/api/blackboard/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            window.location.reload(); // quick & dirty reload 
        } catch (err) {
            console.log("Delete error:", err.message);
        }
    };

    return(

        <>
            <div className="blackboard-entry">
                    <div className="user-email">
                        From: {email}
                    </div>

                    <div className="user-text">
                        {message} 
                    </div>

                    <div className="user-time">
                        {created_at}
                    </div>

                    {currentUserId && userID && Number(currentUserId) === Number(userID) && (
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    
            </div>
        </>
    )
}

export default BlackboardEntry;