import {useState} from 'react'

const SearchResult = ({coin, setCoin}) => {

    const [saveCat, setSaveCat] = useState(null)


let day_change = parseFloat(coin?.changePercent24Hr).toFixed(2)
let coinCapitalized = coin?.id.charAt(0).toUpperCase() + coin?.id.slice(1)
console.log("coin", coin)

function saveCoin(){

    fetch('api/currencies', {

        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            category: saveCat, 
            price: parseFloat(coin?.priceUsd).toFixed(2),
            rank: coin.rank,
            day_change: coin.day_change,
        })
    }).then((r) => r.json()).then((r) => console.log("saveCoin", r))
}

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
                <button name="Buy" className="save-buttons" onClick={(e) => {setSaveCat({category: e.target.name}); saveCoin()}}>Buy</button>
                <button name="Sell" className="save-buttons">Sell</button>
                <button name="Hold" className="save-buttons">Hold</button>
                <button name="Watch" className="save-buttons">Watch</button>
            </div>
        </div>
    )
}

export default SearchResult