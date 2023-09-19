import SearchResult from "./SearchResult"
import avatar from "../images/avatar.png"
import return_right from "../images/return_right.svg"
import {useContext, useState} from "react"
import { AppContext } from "../Context"
import App from "../App"


const Header = ({showModal, setShowModal}) => {

    const {user, setUser} = useContext(AppContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [coin, setCoin] = useState()

    function searchIt(e){

        e.preventDefault()
 
        fetch(`https://api.coincap.io/v2/assets/${searchTerm.toLowerCase()}`,{
            method: "GET",
            headers: {'Content-Type': 'application/json',}})
        .then((r) => r.json()).then((r) => {setCoin(r.data); console.log("coin res", coin); setSearchTerm("")})
        .catch((err) => {console.log("error", err); alert(err)})
    }

    function logout(){
        fetch("/api/logout", {
            method: "DELETE"
        }).then(() => setUser(null))}   

    return(

        <div className="header-container">
            <div className="header-title-container">
                <div className="space-div-left"></div>
                <div className="header-title">
                    <h1>CRYPTOCURRENCY</h1>
                    <h6>A Daily Crypto Organizer</h6>
                </div>
                <div className="space-div-right">
                    <div className="logged-in">{user? `Hello, ${user?.username}`:<button className="login-btn" onClick={()=> setShowModal(true)}>Login</button>  }   </div>
                    <div className="avatar-container">
                        <img onClick={(()=> setShowModal(true))} className="avatar" src={avatar}/>
                        <div className="logout-btn" onClick={()=> logout()}>{user && `logout`}</div>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <form  onSubmit={(e)=> searchIt(e)}>
                    <input  value={searchTerm} className="search-input" placeholder="Search Currency" onChange={(e)=> setSearchTerm(e.target.value)} />
                </form>
                <img onClick={((e)=> searchIt(e))} className="return-button" src={return_right}/>
            </div>

            <div className="header-result">
                <SearchResult coin={coin} setCoin={setCoin}/>
            </div>
        </div>
    )
}

export default Header