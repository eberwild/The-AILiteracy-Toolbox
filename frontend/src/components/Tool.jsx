import '../styles/components/Tool.css';

function Tool({ name , imageSRC , provider , ratingSRC , setRatingMenuOpen , ratingMenuOpen}) {
    
    return (

        <>
            <div className="tool">
                <div className="tool-name">
                    {name}
                </div>
                <img src={imageSRC}
                        className="tool-img" />

                <img src={ratingSRC}
                        className="tool-rating"
                        onClick={() => {
                            setRatingMenuOpen(!ratingMenuOpen)
                        }}/>

                <div className="tool-provider">
                    {provider}
                </div>
            </div>
        </>
    )
}

export default Tool;