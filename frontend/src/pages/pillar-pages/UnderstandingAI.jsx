import MainHeader from "../../components/MainHeader";
import '../../styles/pillarPages/UnderstandingAI.css';

function UnderstandingAI(){

    return(

        <div className="understanding-page">
            <MainHeader/>

            <div className="understanding-intro">
                <h2>Understanding AI</h2>
                <div className="understanding-spacer"></div>
                <p className="understanding-text">
                    Understanding AI refers to the ability to grasp what artificial intelligence is, how it works at a basic level,
                    what it can and cannot do, and how AI systems are created, trained, and used in real-world contexts.
                </p>
            </div>
        </div>
    )
}

export default UnderstandingAI;