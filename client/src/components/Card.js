const Card = ({currency}) => {

    function deleteCard(e){
        e.preventDefault();

        fetch(`/api/currencies/${currency.id}`, {
            method: "DELETE"})


    }

    return (
        <div className="card-cont">
            <p className="card-title">{currency.name}</p>
            
            <div className="card-stats-cont">
                <p className="card-stats">{parseFloat(currency?.price).toFixed(2)}</p>
                <p className="card-stats">{currency.rank}</p>
                <p className="card-stats">{currency.day_change}</p>
            </div>
            <p className="card-delete" onClick={(e) => deleteCard(e)} >x</p>
        </div>
    )
}

export default Card