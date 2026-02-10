import '../styles/components/Tool.css';

function Tool({ name , imageSRC , title , ratingSRC , setRatingMenuOpen , setActiveTool , imgRef}) {
    
    return (

        <>
            <div className="tool">
                <div className="tool-title">
                    {title}
                </div>
                <img src={imageSRC}
                        className="tool-img" />

                <img src={ratingSRC}
                        className="tool-rating"
                        ref={imgRef}
                        onClick={() => {
                            setRatingMenuOpen(true)
                            setActiveTool(name)
                        }}/>

                <div className="tool-provider">
                    {name}
                </div>
            </div>
        </>
    )
}

export default Tool;