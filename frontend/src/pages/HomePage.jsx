import MainHeader from "../components/MainHeader";
import '../styles/pages/HomePage.css';
import UnderstandingPicture from '../assets/UnderstandingAI.png';
import CriticalThinking from '../assets/CriticalThinking.png';
import PracticalSkills from '../assets/PracticalSkills.png';
function HomePage(){

    return (

        <>
        <div className="home-page">
            <MainHeader/>

            <div className="definition-section">
                <h2 className="home-title">What is AI Literacy ?</h2>
                <div className="home-spacer"></div>
                <p className="definition">
                
                    “AI Literacy is a set of competencies that enables individuals to critically
 
                    evaluate AI technologies , communicate and collaborate effectively with AI

                    and use AI as a tool online , at home ,and in the workplace.” 
                    <br/>
                    <br/>

                    Long, D., & Magerko, B. (2020). What is AI Literacy? 
                    Competencies and Design Considerations.  
                    
                </p>
            </div>

            <h2>The 4 Pillars of AI Literacy</h2>
            <div className="home-spacer"></div>
            <p>Click on the picture of the pillar you want to learn more about.</p>

            <div className="pillar-section">
                
                    <img src={UnderstandingPicture} alt="Pillar-UnderstandingAI-logo" />
                
                    <img src={CriticalThinking} alt="Pillar-CriticalThinking-logo" />
               
                    <img src={PracticalSkills} alt="Pillar-PracticalSkill-logo" />

                    <img src={UnderstandingPicture} alt="Pillar-Ethical-logo" />
                
            </div>

        </div>
        </>
    )
}

export default HomePage;