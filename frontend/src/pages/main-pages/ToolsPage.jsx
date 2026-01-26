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
                    Each user can create <strong>one</strong> post on this page. Once published, it becomes visible to all other users.
                    Other users can then request collaboration on the post, allowing for interaction and teamwork around shared ideas.
                </p>
            </div>

        </div>
    )
}

export default ToolsPage;