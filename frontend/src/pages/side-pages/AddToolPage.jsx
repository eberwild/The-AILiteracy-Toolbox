import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/AddToolPage.css';

function AddToolPage() {

    return(

        <div className="add-tool-page">

            <MainHeader/>

            <div className="addtool-intro-section">
                <h2>Provide a Tool</h2>
                <div className="addtool-spacer"></div>
                <p className="addtool-intro">
                    Logged-in users can contribute their own AI tools or games by filling out the input fields below.
                    Once submitted, the entry will be reviewed by the admin team. <br/>
                    If approved, the tool will be published on the toolbox page, making it available for all users to explore and play.
                </p>
            </div>

            <div className="provide-tool-section">

            </div>

        </div>
    )
}

export default AddToolPage;