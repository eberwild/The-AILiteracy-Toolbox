import MainHeader from "../components/MainHeader";
import '../styles/pages/HomePage.css';
function HomePage(){

    return (

        <>
        <div className="home-page">
            <MainHeader/>

            <div className="definition">
                <h2 className="home-title">What is AI Literacy ?</h2>
                <div className="home-spacer"></div>
                <p>This will be the definition of ai literacy..</p>
            </div>

        </div>
        </>
    )
}

export default HomePage;