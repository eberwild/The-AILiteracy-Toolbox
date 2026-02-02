import '../styles/components/Tool.css';

function Tool({ name , imageSRC , provider}) {
    
    return (

        <>
            <div className="tool">
                <div className="tool-name">
                    {name}
                </div>
                <img src={imageSRC}
                        className="tool-img" />

                <img src=""
                        className="tool-rating"/>

                <div className="tool-provider">
                    {provider}
                </div>
            </div>
        </>
    )
}

export default Tool;