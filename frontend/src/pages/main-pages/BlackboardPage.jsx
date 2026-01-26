import MainHeader from "../../components/MainHeader";
import '../../styles/pages/Blackboard.css';

function BlackboardPage() {

    return(

        <div className="blackboard-page">
            <MainHeader/>

            <div className="blackboard-intro-section">
                <h2>The Blackboard</h2>
                <div className="blackboard-spacer"></div>
                <p className="blackboard-intro">
                    Each user can create <strong>one</strong> post on this page. Once published, it becomes visible to all other users.
                    Other users can then request collaboration on the post, allowing for interaction and teamwork around shared ideas.
                </p>
            </div>

            <div className="blackboard">

                <div className="blackboard-entry">
                    
                </div>

            </div>
            
        </div>
    )
}

export default BlackboardPage;