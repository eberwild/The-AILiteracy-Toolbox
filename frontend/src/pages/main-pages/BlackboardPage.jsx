import { useState } from 'react';
import BlackboardEntry from '../../components/BlackboardEntry';
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/Blackboard.css';

function BlackboardPage() {

    const [ message , setMessage ] = useState('');

    // only for testing the design
    const testtext = "iwhefihwfw öamdölakföl ölamdlamcloewk l,mlamcamcpwme öslaökldpwkofkjkkvl nvnvnvnksksaklak kysknkl kwiuitjbbcnnabmbj hhhhhhhhhhhiqihdihdiewhiewhfiewhfiewhfiewhf"
    const email = "kevinflotow@arcor.de"

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

                <BlackboardEntry
                    email={email}
                    text={testtext}
                />
            
                <BlackboardEntry
                    email={email}
                    text={testtext}
                />

                <BlackboardEntry
                    email={email}
                    text={testtext}
                />
                

                

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

                <button className='blackboard-button'>
                    Post to Blackboard
                </button>
                </div>
            
        </div>
    )
}

export default BlackboardPage;