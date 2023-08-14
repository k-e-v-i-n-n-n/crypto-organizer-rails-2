import {AppContext} from "../Context"
import {useContext} from "react"

const Card = ({currency}) => {

    const {user, setUser} = useContext(AppContext)

    function deleteCard(e){
        e.preventDefault();

        fetch(`/api/currencies/${currency.id}`, {
            method: "DELETE"}).then((r) => { console.log("r", r)}).then((r) => deleteState(r))
    }

    

    function deleteState(r){
        let currencies = user.currencies
        let currenciesFilter = currencies.filter((c) => c.id != currency.id)
        setUser({...user, currencies: currenciesFilter})
        console.log("currencies", currenciesFilter)
    }

    return (
        <div className="card-cont">
            <p className="card-title">{currency.name}</p>
            
            <div className="card-stats-cont">
                <p className="card-stats"><span className="card-stats-bold">Price</span>  • {parseFloat(currency?.price).toFixed(2)}</p>
                <p className="card-stats"><span className="card-stats-bold"> Rank </span> • {currency.rank}</p>
                <p className="card-stats">{currency.day_change}</p>
                <p className="card-delete" onClick={(e) => deleteCard(e)} >x</p>
            </div>
            
        </div>
    )
}

export default Card