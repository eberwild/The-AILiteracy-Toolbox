import MainHeader from "../../components/MainHeader";
import '../../styles/pages/ToolsPage.css';

function ToolsPage() {

    return(

        <div className="tools-page">
            <MainHeader/>

            <div className="tools-intro-section">
                <h2>AI Literacy Tools</h2>
                <div className="tools-spacer"></div>
                <p className="tools-intro">
                    This toolbox offers a collection of interactive games and tools designed to help you
                    build AI literacy in a practical and engaging way. By playing, experimenting, and exploring,
                    you can better understand how AI works, how it is used, and how to interact with it critically and responsibly.
                    <br/>
                    At the bottom of the page, registered users can submit their own tools or games to the toolbox. 
                    After a review process, approved submissions will be made visible to all users.
                    You can play and explore the tools without an account but contributing to the toolbox requires registration.
                </p>
            </div>

        </div>
    )
}

export default ToolsPage;