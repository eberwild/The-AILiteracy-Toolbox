import '../styles/components/BlackboardEntry.css';
import dayjs from 'dayjs';

function BlackboardEntry({email , text }) {

    function getCurrentTime(){
        const now = dayjs();
        return now.format("DD.MM.YYYY HH:mm");
    }

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
                        {getCurrentTime()}
                    </div>
                    
            </div>
        </>
    )
}

export default BlackboardEntry;