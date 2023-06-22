const SearchResult = ({coin, setCoin}) => {

// let price = parseFloat(coin?.priceUsd).toFixed(2)
let day_change = parseFloat(coin?.changePercent24Hr).toFixed(2)
let coinCapitalized = coin?.id.charAt(0).toUpperCase() + coin?.id.slice(1)

    return(

        <div className="search-result-container">
            <div className="result-tags-container">
                <h4>{coin ? coinCapitalized : "Currency"}</h4>
                <div className="results-p">
                    <p>Price {coin && parseFloat(coin?.priceUsd).toFixed(2) }</p>
                    <p>Rank {coin && coin?.rank}</p>
                    <p>Day Change {coin && day_change}</p>
                </div>
            </div>
            <div className="save-buttons-container">
                <button className="save-buttons">Buy</button>
                <button className="save-buttons">Sell</button>
                <button className="save-buttons">Hold</button>
                <button className="save-buttons">Watch</button>
            </div>
        </div>
    )
}

export default SearchResult