import { useState } from 'react';
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/Blackboard.css';

function BlackboardPage() {

    const [ entryText , setEntryText ] = useState('');

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
                </p>
            </div>

            <div className="blackboard">

                <div className="blackboard-entry">
                    <div className="user-name">
                        eberwild
                    </div>

                    <div className="user-text">
                        Hey all , im looking for someone to work with , i have ver little experience in working with ai 
                        so i dont want to start a tool alone. Message me ! 
                    </div>

                    <div className="user-time">
                        10:33
                    </div>
                    
                </div>

                <div className="blackboard-entry">
                    <div className="user-name">
                        eberwild
                    </div>

                    <div className="user-text">
                        Hey all , im looking for someone to work with , i have ver little experience in working with ai 
                        so i dont want to start a tool alone. Message me ! 
                    </div>

                    <div className="user-time">
                        10:33
                    </div>
                    
                </div>

                <div className="blackboard-entry">
                    <div className="user-name">
                        eberwild
                    </div>

                    <div className="user-text">
                        Hey all , im looking for someone to work with , i have ver little experience in working with ai 
                        so i dont want to start a tool alone. Message me ! blajdpjdpiewhfipowhefoiwhhfoehnljwnhfljwnjdr
                    </div>

                    <div className="user-time">
                        10:33
                    </div>
                    
                </div>

            </div>

            <div className="blackboard-input-section">
                <h2 className='create-info'>
                    Create a new entry on the Blackboard here !
                </h2>
                <div className='entry-spacer'></div>
                <p>Email and timestamp will automaticly be added to the entry.</p>
                    <textarea type="text"
                           className='blackboard-input'
                           value={entryText}
                           onChange={(event) => {
                                setEntryText(event.target.value)
                           }} />

                <button className='blackboard-button'>
                    Post to Blackboard
                </button>
                </div>
            
        </div>
    )
}

export default BlackboardPage;