import React, {useEffect, useState} from "react";
import {auth,logout} from "../services/AuthServices";
import {Navbar, NavDropdown} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import * as userService from "../services/UserServices"

const User = ()=>{
    const [userData, setUserData] = useState({})
    const [user,loading, error] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return
        if(!user) return navigate("/")
        userService.getUserData(user,setUserData)
    },[user,loading,userData])

    return(
        <Navbar.Collapse className="justify-content-end ">
            {user &&
                <NavDropdown title={userData.name}>
                    <NavDropdown.Item className="text-dark">{userData.email}</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={logout} className="text-dark">Atsijungti</NavDropdown.Item>
                </NavDropdown>
            }
        </Navbar.Collapse>
    )

}

export default User