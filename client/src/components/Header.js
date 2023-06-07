import SearchResult from "./SearchResult"
import avatar from "../images/avatar.png"
import {useContext} from "react"
import { AppContext } from "../Context"
import App from "../App"


const Header = ({showModal, setShowModal}) => {

    const {user, setUser} = useContext(AppContext)

    function logout(){
        fetch("/api/logout", {
            method: "DELETE"
        }).then((r)=> r.json()).then(() => setUser(null))
    }   

    return(

        <div className="header-container">
            <div className="header-title-container">
                <div className="space-div-left"></div>
                <div className="header-title">
                    <h1>CRYPTOCURRENCY</h1>
                    <h7>A Daily Crypto Organizer</h7>
                </div>
                <div className="space-div-right">
                    <div className="logged-in">{user? `Hello, ${user?.username}`:<button className="login-btn" onClick={()=> setShowModal(true)}>Login</button>  }   </div>
                    <div className="avatar-container">
                        <img onClick={(()=> setShowModal(true))} className="avatar" src={avatar}/>
                        <div className="logout-btn" onClick={()=> logout()}>{user && `logout`}</div>
                    </div>
                </div>
            </div>
           
                <input className="search-input" placeholder="Search Currency"/>
               
        
            <div className="header-result">
                <SearchResult/>
            </div>
        </div>
    )
}

export default Header