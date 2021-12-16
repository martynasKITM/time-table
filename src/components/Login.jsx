import React, {useState, useEffect} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Form, Button} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom"
import {auth, signInWithEmailPassword} from "../services/AuthServices";
const Login = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(loading) return
        if(user) navigate("/works")

    },[user,loading])

    const submitHandler = (e)=>{
        e.preventDefault()
        signInWithEmailPassword(email,password)
    }

    return(
        <>
            <h2 className="mt-3 text-center">Prisijungti</h2>
            <Form onSubmit={submitHandler}>
            <Form.Group >
                <Form.Control
                type="email"
                placeholder="El. pašto adresas"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <Form.Control
                   type="password"
                   placeholder="Slaptažodis"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                />
                <Button type="submit" variant="primary">
                    Prisijungti
                </Button>
                <div>
                    <ul>
                        <li>Neturi paskyros? <Link to="/register">Registruokis</Link></li>
                        <li>Pamiršai slaptažodį? <Link to="/reset">Atstatyk</Link></li>
                    </ul>
                </div>
            </Form.Group>
            </Form>
        </>

    )
}

export default Login