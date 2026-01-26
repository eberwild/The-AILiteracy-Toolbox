import MainHeader from "../../components/MainHeader";
import '../../styles/pillarPages/CriticalThinking.css';

function CriticalThinking() {

    return(

        <div className="critical-thinking-page">
                <MainHeader/>

                <div className="critical-intro">
                    <h2>Critical Thinking</h2>
                    <div className="critical-spacer"></div>
                    <p className="critical-text">
                        Critical Thinking means being able to assess the reliability, limitations, biases,
                        and consequences of AI systems and their results,
                        and to make informed judgments about when and how AI should be trusted or used.
                    </p>
                </div>

        </div>
    )
}

export default CriticalThinking;