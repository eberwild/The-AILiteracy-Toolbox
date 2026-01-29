function BlackboardEntry({email , text }) {

    function getCurrentTime(){
        
    }

    return(

        <>
            <div className="blackboard-entry">
                    <div className="user-name">
                        {email}
                    </div>

                    <div className="user-text">
                        {text} 
                    </div>

                    <div className="user-time">
                        10:33
                    </div>
                    
            </div>
        </>
    )
}

export default BlackboardEntry;