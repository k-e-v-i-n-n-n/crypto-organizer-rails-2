import Card from "./Card"
import {useContext}  from "react"
import {AppContext} from '../Context.js'

const Organizer = () =>{

    const {user, setUser} = useContext(AppContext)

    let currenciesArr = user?.currencies
    console.log("type", typeof user?.currencies)

    let buyCat = Array.isArray(currenciesArr) ? currenciesArr.filter((curr) => curr.category === 'Buy') : []
    let sellCat = Array.isArray(currenciesArr) ? currenciesArr.filter((curr) => curr.category === 'Sell') : []
    let holdCat = Array.isArray(currenciesArr) ? currenciesArr.filter((curr) => curr.category === 'Hold') : []
    let watchCat = Array.isArray(currenciesArr) ? currenciesArr.filter((curr) => curr.category === 'Watch') : []

    let buyMap = buyCat.map((currency) => {return <Card key={currency.id} currency={currency}/>  } )
    let sellMap = sellCat.map((currency) => {return <Card key={currency.id} currency={currency}/>  } )
    let holdMap = holdCat.map((currency) => {return <Card key={currency.id} currency={currency}/>  } )
    let watchMap = watchCat.map((currency) => {return <Card key={currency.id} currency={currency}/>  } )

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
                    <div className="organizer-column">{buyMap}</div>
                    <div className="organizer-column">{sellMap}</div>
                    <div className="organizer-column">{holdMap}</div>
                    <div className="organizer-column">{watchMap}</div>
                </div>
            </div>
        </div>

    )
}

export  default Organizer