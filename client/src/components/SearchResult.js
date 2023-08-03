    import {useState, useContext} from 'react'
    import {AppContext} from '../Context'


    const SearchResult = ({coin, setCoin}) => {

        const {user, setUser} = useContext(AppContext)

    let day_change = parseFloat(coin?.changePercent24Hr).toFixed(2)
    let coinCapitalized = coin?.id.charAt(0).toUpperCase() + coin?.id.slice(1)
    console.log("coin", coin)

    function saveCoin(e){
    e.preventDefault();
        fetch('api/currencies', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                name: coin?.name,
                category: e.target.name, 
                price: parseFloat(coin?.priceUsd).toFixed(2),
                rank: coin?.rank,
                day_change: coin?.day_change,
            })
        }).then((r) => r.json()).then((r) => {addCoin(r); console.log("saveCoin", r)})
    }

    function addCoin(r){
        
        let currencies = user?.currencies
        currencies.push(r)
        setUser({...user, currencies: currencies})

        console.log("addCoin updated", user)
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
                    <button name="Buy" className="save-buttons" onClick={(e) => {saveCoin(e)}}>Buy</button>
                    <button name="Sell" className="save-buttons">Sell</button>
                    <button name="Hold" className="save-buttons">Hold</button>
                    <button name="Watch" className="save-buttons">Watch</button>
                </div>
            </div>
        )
    }

    export default SearchResult