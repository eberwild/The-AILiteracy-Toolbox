import MainHeader from "../../components/MainHeader";
import '../../styles/sidePages/AddToolPage.css';

function AddToolPage() {

    return(

        <div className="add-tool-page">

            <MainHeader/>

            <div className="addtool-intro-section">
                <h2>Add Your own Tool</h2>
                <div className="addtool-spacer"></div>
                <p className="addtool-intro">
                    Logged-in users can contribute their own AI tools or games by filling out the input fields below.
                    Once submitted, the entry will be reviewed by the admin team. <br/>
                    If approved, the tool will be published on the toolbox page, making it available for all users to explore and play.
                </p>
            </div>

        <div className="provide-tool-section">
            <h1 className="submit-header">Submit Your Tool here!</h1>
            <div className="addtool-spacer"></div>
            <p className="share-text">
                Help us grow the AI Toolbox!  
                Share your interactive game, quiz or teaching tool to help others understand AI concepts in fun and accessible ways.
            </p>

            <div className="intro-steps">
                <div className="intro-step">
                <div className="intro-text"></div>
                <p>1. Fill in the form</p>
                <small>Title, category, and short description</small>
                </div>
                <div className="intro-step">
                <div className="intro-text"></div>
                <p>2. Add your link</p>
                <small>Include GitHub or working version</small>
                </div>
                <div class="intro-step">
                <div className="intro-text"></div>
                <p>3. We feature it</p>
                <small>After review, your tool goes live!</small>
                </div>
            </div>

            <form className="input-form">

                <label for="name">Your Name/Alias</label>
                <input type="text" className="user-alias" placeholder="Enter your name or an alias" required/>
                
                <label for="title">Tool Title*</label>
                <input type="text" className="tool-name" placeholder="Enter tool name" required />

                <label for="email">Contact Email*</label>
                <input type="email" className="user-email" placeholder="you@example.com" required />

                <label for="type">Type*</label>
                <select id="type" name="type" required>
                <option value="" disabled selected>Choose one</option>
                <option value="game">Game</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
                </select>

                <label for="github">GitHub Link*</label>
                <input type="url" className="github-link" placeholder="https://github.com/..." required />

                <label for="thumbnailURL">Thumbnail URL</label>
                <input type="url" className="thumbnail-URL" placeholder="https://example.com/image.jpg" />

                <label for="uploadTags">Tags (comma separated)</label>
                <input type="text" className="upload-tags" placeholder="e.g. education, games, learning" />

                <label for="ageRecommendation">Age Recommendation*</label>
                <select className="ageRecommendation" name="ageRecommendation" required>
                <option value="" disabled selected>Select age range</option>
                <option value="all">All ages</option>
                <option value="5-12">Kids (5-12)</option>
                <option value="13-17">Teens (13-17)</option>
                <option value="18+">Adults (18+)</option>
                </select>

                <label for="description">Description*</label>
                <textarea name="description"
                          rows="4" 
                          placeholder="Brief description..."
                          className="tool-text-area" 
                          required>
                </textarea>

                <button type="button" className="submit-button">Submit</button>
            </form>

        </div>

    </div>
    )
}

export default AddToolPage;