import MainHeader from "../components/MainHeader";
import '../styles/InfoPage.css';

function InfoPage(){

    return (
        <div className="info-page">
            <MainHeader/>

            <div className="website-info">
                <h2 className="info-title">Info Title</h2>
                <p className="info-text">InfoTex</p>
            </div>
            
        
        </div>
    )
   
}

export default InfoPage;