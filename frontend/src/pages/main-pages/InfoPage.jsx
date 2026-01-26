import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/InfoPage.css';

function InfoPage(){

    // useNavigate -> easy navigation between different pages
    const navigate = useNavigate();

    return (
        <div className="info-page">
            <MainHeader/>

            <div className="website-info">
                <h2 className="info-title">
                    The AI Literacy Toolbox
                </h2>

                <div className="info-spacer"></div>

                <p className="info-text">
                    The AI Literacy Toolbox helps people understand what artificial intelligence is, 
                    and also how it affects out society.
                    It provides practical tools which are contributed by users and by students,
                    explanations for beginner, and learning resources to support a critical, ethical and informed use of AI.
                </p>

                <p className="info-text">
                    Sounds interesting to You ?
                </p>

                <div className="button-section">
                    <button className="signup-button"
                    onClick={() => {
                        navigate('/register');
                    }}>
                    Sign up
                    </button>

                    <button className="login-button"
                    onClick={() => {
                        navigate('/login');
                    }}>
                        Log in
                    </button>
                </div>
                
                
            </div>
            
        
        </div>
    )
   
}

export default InfoPage;