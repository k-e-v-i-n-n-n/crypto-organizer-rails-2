import {AppContext} from "../Context"
import {useContext} from "react"

const Card = ({currency}) => {

    const {user, setUser} = useContext(AppContext)
    console.log("currency", currency)

    function deleteCard(e){
        e.preventDefault();

        fetch(`/api/currencies/${currency.id}`, {
            method: "DELETE"}).then((r) => { console.log("r", r)}).then((r) => deleteState(r))
    }

    function deleteState(r){
        let currencies = user.currencies
        let currenciesFilter = currencies.filter((c) => c.id != currency.id)
        setUser({...user, currencies: currenciesFilter})
    }

    return (
        <div className="card-cont">
            <p className="card-title">{currency.name}</p>
            <div className="card-stats-cont">
                <p className="card-stats"><span className="card-stats-bold">Price</span>&nbsp;• ${parseFloat(currency?.price).toFixed(2)}</p>
                <p className="card-stats"><span className="card-stats-bold">Rank </span>&nbsp;• {currency.rank}</p>
                <p className="card-stats"><span className="card-stats-bold">Day Change </span>&nbsp;• {currency.day_change}%</p>
            </div>
            <p className="card-delete" onClick={(e) => deleteCard(e)} >x</p>
        </div>
    )
}

export default Card