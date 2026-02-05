import { useNavigate } from 'react-router-dom';

import UnderstandingPicture from '../../assets/UnderstandingAI.png';
import CriticalThinking from '../../assets/CriticalThinking.png';
import PracticalSkills from '../../assets/PracticalSkills.png';
import Ethic from '../../assets/Ethics.png';
import MainHeader from '../../components/MainHeader';

function PillarPage() {

    const pillarNavigate = useNavigate();

    return(

        <>  
            <MainHeader/>

            <h2>The 4 Pillars of AI Literacy</h2>
                        <div className="home-spacer"></div>
                        <p className='pillar-text'>
                            Click on the picture of the pillar you want to learn more about.
                        </p>
            
                        <div className="pillar-section">
                            
                                <img src={UnderstandingPicture} alt="Pillar-UnderstandingAI-logo"
                                    onClick={() => {
                                        pillarNavigate('/understandingAI');
                                    }} />
                            
                                <img src={CriticalThinking} alt="Pillar-CriticalThinking-logo"
                                    onClick={() => {
                                        pillarNavigate('/criticalThinking');
                                    }} />
                           
                                <img src={PracticalSkills} alt="Pillar-PracticalSkill-logo"
                                    onClick={() => {
                                        pillarNavigate('/practicalSkills');
                                    }} />
            
                                <img src={Ethic} alt="Pillar-Ethical-logo"
                                    onClick={() => {
                                        pillarNavigate('/ethics');
                                    }} />
                            
                        </div>
        </>
    )
}

export default PillarPage;