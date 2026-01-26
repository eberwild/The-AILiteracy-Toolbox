import MainHeader from "../../components/MainHeader";
import '../../styles/pillarPages/Ethics.css';

function Ethics() {

    return(

        <div className="ethics-page">
            <MainHeader/>

            <div className="ethic-intro">
                    <h2>Ethic & Responsibility</h2>
                    <div className="ethic-spacer"></div>
                    <p className="ethic-text">
                        Ethics and Responsibility mean understanding issues such as bias, privacy,
                        fairness, and accountability in AI,
                        and making conscious,
                        responsible decisions about how AI is developed, deployed, and used.
                    </p>
                </div>
        </div>
    )
}

export default Ethics;