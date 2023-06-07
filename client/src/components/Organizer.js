import Card from "./Card"

const Organizer = () =>{

    return(
        <div className="organizer-container">
            <div className="organizer-inner">
                <div className="organizer-titles-container">
                    <p className="organizer-titles" >Buy</p>
                    <p className="organizer-titles">Sell</p>
                    <p className="organizer-titles">Hold</p>
                    <p className="organizer-titles">Watch</p>
                </div>
                <div className="organizer-columns-container">
                        <div className="organizer-column">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="organizer-column"></div>
                        <div className="organizer-column"></div>
                        <div className="organizer-column"></div>
                </div>
            </div>
        </div>

    )
}

export  default Organizer