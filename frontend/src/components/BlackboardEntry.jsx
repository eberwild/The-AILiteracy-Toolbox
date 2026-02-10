import '../styles/components/BlackboardEntry.css';

function BlackboardEntry({ email , message , created_at}) {


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
                    
            </div>
        </>
    )
}

export default BlackboardEntry;