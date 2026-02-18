import { useState , useRef , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainHeader from "../../components/MainHeader";
import '../../styles/pages/ToolsPage.css';
import Tool from '../../components/Tool';

function ToolsPage() {

    const toolNavigate = useNavigate();

    const [ratingMenuOpen , setRatingMenuOpen] = useState(false);
    const [activeTool , setActiveTool] = useState(null);
    const [tools , setTools] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [search , setSearch ] = useState("");

    const menuRef = useRef(null);
    const imgRef = useRef(null);

    // gets a value out of the database and checks if it is a string -> convert ',' to '.' for image-pathing
    function getStars(rating){
        let strRating = typeof rating === "string" ? rating : rating.toString();
        strRating = strRating.replace("," , ".");
        return strRating;
    }

    useEffect(() => {
        function handleClickOutside(event){
            
        // menuRef.current -> div rating-menu
        // !menuRef.current.contains(event.target) -> if we click outside of the rating-menu
        // **** -> same goes for the img that opens the rating-menu
        if (menuRef.current &&
            !menuRef.current.contains(event.target) &&
            !imgRef.current.contains(event.target)) {
            // close the rating-menu -> display:noone;
            setRatingMenuOpen(false);
        }
            
        }
        // global click-event inside the browser -> created on page mount
        document.addEventListener("click", handleClickOutside);

        // when page is unmounted -> remove the eventlistener 
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
        // [] -> empty dependency array -> run useEffect only when page is mounted
    } , [ratingMenuOpen]);

    // useEffect to fetch tools from db
    useEffect(() => {
        async function getTools(){
            try {
                const response = await axios.get('http://localhost:5000/api/tools');
                setTools(response.data);
            }catch(err){
                console.log('Error in fetching tools:' , err.message);
            } finally {
                setIsLoading(false);
            }
        }

        getTools();
    } , [])

    // test rating
    const rating = "2,5";

    // filter for tools including the current search value
    const filteredTools =  tools.filter((tool) => {
        return tool.title.toLowerCase().includes(search.toLowerCase())
    });

    return(

        <div className="tools-page">

            <MainHeader/>

            <div className="tools-intro-section"
            >
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
                    <br/>
                    <br/>
                    If you want to rate a tool, just click on the corresponding star-rating.
                </p>
            </div>

            <p className='search-here'>Search here for a Tool :</p>
            <input type="text"
                   className="tool-search"
                   value={search}
                   onChange={(event) => {
                    setSearch(event.target.value);
                   }} 
            />

            <div className="tools-section">

            {isLoading ? 
                (
                    <div>Loading Tools..</div>
                ) 
            : 
            filteredTools && filteredTools.length > 0 ? 

                (

                filteredTools.map((filterTool) => (
                <Tool
                    key={filterTool.id}  
                    name={filterTool.name}
                    title={filterTool.title}
                    imageSRC={filterTool.img_URL}
                    ratingSRC={`/src/assets/ratings/${getStars(rating)}.png`}
                    setRatingMenuOpen={setRatingMenuOpen}
                    setActiveTool={setActiveTool}
                    imgRef={imgRef}
                />
                ))

                ) 
            : 
                (      
                    <div>No tools loaded..</div>
                )
            }

                {/*hidden div -> opens rating menu if click in stars*/ }
                <div className='rating-menu'
                    // menuRef.current = rating-menu
                    // acts like a pointer
                    ref={menuRef}
                    style={{display: ratingMenuOpen ? "flex" : "none" }}>
                        <h2 className='rating-menu-header'>
                            Rate "{activeTool}"!
                        </h2>
                        <div className='rating-menu-image-container'>
                            {/*add all the possible rating-images here */}
                            {[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5].map((rating) => (
                            <img
                                className='rating-menu-images'
                                key={rating}
                                src={`/src/assets/ratings/${rating}.png`}
                                alt={`${rating} Sterne`}
                                onClick={() => {
                                    console.log("Rating gewählt : " , rating)
                                }}
                            />
                            ))}
                        </div>
                        <button className='submit-rating-button'>
                            Submit Rating
                        </button>
                    </div>

            </div>

            <button className="navigate-add-tool-button"
                     onClick={() => {
                        toolNavigate('/add-tool');
                     }}>
                Provide a tool
            </button>
    
        </div>
    )
}

export default ToolsPage;