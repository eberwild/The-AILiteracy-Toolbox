import '../styles/components/BlackboardEntry.css';

function BlackboardEntry({ email , text , created_At}) {


    return(

        <>
            <div className="blackboard-entry">
                    <div className="user-email">
                        From: {email}
                    </div>

                    <div className="user-text">
                        {text} 
                    </div>

                    <div className="user-time">
                        {created_At}
                    </div>
                    
            </div>
        </>
    )
}

export default BlackboardEntry;