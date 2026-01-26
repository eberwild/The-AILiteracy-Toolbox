import MainHeader from "../../components/MainHeader";
import '../../styles/pillarPages/PracticalSkills.css';

function PracticalSkills() {

    return(

        <div className="practical-page">
            <MainHeader/>

            <div className="practical-intro">
                    <h2>Practical Skills</h2>
                    <div className="practical-spacer"></div>
                    <p className="practical-text">
                        Practical Skills mean being able to interact with AI systems hands-on—such as selecting appropriate tools,
                        providing meaningful inputs,
                        interpreting outputs,
                        and applying results appropriately while understanding their limitations.
                    </p>
                </div>
        </div>
    )
}

export default PracticalSkills;