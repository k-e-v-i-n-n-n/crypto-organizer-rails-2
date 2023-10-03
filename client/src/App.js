import Header from "./components/Header"
import Organizer from "./components/Organizer";
import LoginModal from "./components/LoginModal";
import {useState, useContext, useEffect} from "react"
import {AppContext} from "./Context"


function App() {

  const {user, setUser} = useContext(AppContext)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetch('/api/me')
    .then((r)=>{
      if(r.ok){r.json().then((r) => {setUser(r); console.log("user", r)})}
      else{setShowModal(true)}})
  }, [])




// console.log("palindrome", isIt(input))


  return (
    <>
       {showModal && <LoginModal setShowModal={setShowModal}/>}
      <Header setShowModal={setShowModal} showModal={showModal}/>
      <Organizer/>
      
    </>
  );
}

export default App
