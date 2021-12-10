import Header from "./components/Header";
import Works from "./components/Works";
import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";

const App  = ()=>{
    const [message, setMessage] = useState('')
    const setMessageHandler = (status)=>{
        if(status){
            setMessage('Darbas pridėtas sėkmingai')
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setMessage('')
        },5000)
    },[message])

  return(
      <div className="container">
        <Header/>
          {!!message.length && <Alert variant="success">{message}</Alert> }
              <Works status ={setMessageHandler}/>

      </div>
  )

}
export default App;
