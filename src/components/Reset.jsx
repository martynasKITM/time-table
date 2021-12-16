import React, {useState, useEffect} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {auth, sendPasswordReset} from "../services/AuthServices";

const Reset = ()=>{
    const [email, setEmail] =useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(loading) return;
    },[user, loading])


    const submitHandler = (e)=>{
        e.preventDefault()
        sendPasswordReset(email)
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
                    <Button type="submit" variant="primary">
                        Prisijungti
                    </Button>
                    <div>
                        <ul>
                            <li>Turi paskyrą? <a href="/">Prisijunk</a></li>
                        </ul>
                    </div>
                </Form.Group>
            </Form>
            </>
            )
}




export default Reset