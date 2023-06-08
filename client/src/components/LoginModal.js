import {useState, useContext} from "react"
import { AppContext } from "../Context"

const LoginModal = ({setShowModal}) => {
    const [error, setError] = useState(null)
    const [isLogIn, setIsLogIn] = useState(false)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
  
    const {user, setUser} = useContext(AppContext)
  
    console.log("user", user)
  
    const goLogin = (isIt) => {
      setError(null)
      setIsLogIn(isIt)
    }
  
    const handleSubmit = (e, endpoint) =>{
      e.preventDefault()
      console.log("endpoing", endpoint)
      if(!isLogIn && password !== passwordConfirm){
        setError("Please check that passwords match")
        return
      }
     
  
      fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
          username: username,
          password: password,
          password_confirmation: passwordConfirm
        })
  
      }).then((r) =>{
        if(r.ok)
        {r.json().then((r) => {setUser(r); setShowModal(false); console.log("user r", r)})}
        else
        {console.log("user r", r)}})}
      
  
      return (
        <div className="overlay">
         
                {/* <div className="auth-container" > */}
                        <div className="auth-container-box">
                          <button className="auth-x" onClick={(()=> setShowModal(false))}>X</button>
                        <form className="login-form">
                            <h2 className="auth-title">{isLogIn? "Please log in" : "Please sign up"}</h2>
                            <input type="username" placeholder="username" onChange={(e)=> setUsername(e.target.value)} />
                            <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
                            {!isLogIn && <input type="password" placeholder="password confirmation" onChange={(e)=> setPasswordConfirm(e.target.value)} />}
                            <input type="submit" className="create" onClick={(e) => {handleSubmit(e, isLogIn? "login" : "signup")}}/>
                            {error && <p>{error}</p>}
                        </form>
                        <div className="auth-options">
                            <button onClick={() => {goLogin(false)}} 
                            style={{backgroundColor : isLogIn ? 'rgb(200, 200, 200)' : 'rgb(255, 255, 255)'}}
                            >Signup</button>
                            <button onClick={() => {goLogin(true)}}
                            style={{backgroundColor : !isLogIn ? 'rgb(200, 200, 200)' : 'rgb(255, 255, 255)'}}
                            >Login</button>
                        </div>
                        </div>
                {/* </div> */}
            
        </div>
      )
    }
    

export default LoginModal