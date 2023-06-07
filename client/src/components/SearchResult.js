const SearchResult = () => {


    return(

        <div className="search-result-container">
            <div className="result-tags-container">
                <h4>Currency</h4>
                <div className="results-p">
                    <p>Price</p>
                    <p>Rank</p>
                    <p>Day Change</p>
                </div>
            </div>
            <div className="save-buttons-container">
                <button className="save-buttons" >Buy</button>
                <button className="save-buttons">Sell</button>
                <button className="save-buttons">Hold</button>
                <button className="save-buttons">Watch</button>
            </div>
        </div>
    )
}

export default SearchResult