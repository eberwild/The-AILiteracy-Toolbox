import { useEffect, useState } from 'react';
import axios from 'axios';
import BlackboardEntry from '../../components/BlackboardEntry';
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/Blackboard.css';

function BlackboardPage() {

    const [message , setMessage ] = useState('');
    const [isLoading , setIsLoading] = useState(true);
    const [entries , setEntries ] = useState([]);

    useEffect(() => {
        async function getEntries(){
            try{
                const response = await axios.get("http://localhost:3000/api/blackboard");
                setEntries(response.data);
                setIsLoading(false);
            }catch(err){
                console.log("Error in fetchEntries:" , err.message);
            }
        }
        getEntries();
    } , [])

    return(

        <div className="blackboard-page">
            <MainHeader/>

            <div className="blackboard-intro-section">
                <h2>The Blackboard</h2>
                <div className="blackboard-spacer"></div>
                <p className="blackboard-intro">
                    Each user can create <span className="one">one</span> post on this page. Once published, it becomes visible to all other users.
                    Other users can then request collaboration on the post, allowing for interaction and teamwork around shared ideas.
                    <br/>
                    You need to be logged in to create a new post on the Blackboard.
                    <br/>
                    <br/>
                    Example entry: create your own by filling out the form on the bottom of this page.
                </p>
            </div>

            <div className='example-entry'>
                <BlackboardEntry
                    email={"example@email.com"}
                    message={"Your message will be displayed here."}
                    created_at={"2026-02-11 20:09:45"}
                />
            </div>
           
           <div className='blackboard-spacer'></div>

            <div className="blackboard">
                
                {isLoading ? 
                    (
                        <div>Loading Blackboard..</div>
                    ) 
                : 
                    entries && entries.length > 0 ? (
                        entries.map((entry) => (

                            <BlackboardEntry
                                key={entry.id}
                                email={entry.email}
                                message={entry.message}
                                created_at={entry.created_at}
                            />
                    ))
                    ) 
                : 
                    (      
                        <div>No entries loaded..</div>
                    )}

            </div>

            <div className="blackboard-input-section">
                <h2 className='create-info'>
                    Create a new entry on the Blackboard here !
                </h2>
                <div className='entry-spacer'></div>
                <p>Email and timestamp will automaticly be added to the entry.</p>
                    <textarea type="text"
                           className='blackboard-input'
                           value={message}
                           onChange={(event) => {
                                setMessage(event.target.value)
                           }} />

                <button className='blackboard-button'
                        onClick={async () => {
                            try{
                                const token = localStorage.getItem('token');
                                if(!token){
                                    console.log('No token found , acces denied.');
                                }
                                const response = await axios.post("http://localhost:3000/api/blackboard" , 
                                    {
                                        message 
                                    }
                                ,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`
                                        }
                                    }
                                );

                                console.log(response.data.message);
                            }catch(err){
                                console.log("Error in submitting to blackboard:" , err.message);
                            }
                        }}>
                    Post to Blackboard
                </button>
                </div>
            
        </div>
    )
}

export default BlackboardPage;