import React, {useEffect, useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import WorkTable from "./WorkTable";
import {useAuthState} from "react-firebase-hooks/auth";
import Filter from "./Filter";
import * as service from "../services/worksServices"
import {useNavigate} from "react-router-dom"
import {auth} from "../services/AuthServices";


const Works  = (props)=>{
    const [addWork,setAddWork] = useState(false)
    const[works, setWorks] = useState([])
    const [filterCriteria, setFilterCriteria] = useState({});
    const[user,loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const closeFormHandler = ()=>{
        setAddWork(false)
    }

    const onSaveWorkHandler = (data)=>{
        service.addWork(data)
        props.status(true)
        closeFormHandler()
    }


    const filterHandler = (criteria)=>{
        setFilterCriteria(criteria)
    }

    useEffect(()=>{
        if(!user) navigate('/')
        service.getAllWorks((works)=>setWorks(works))
    },[])

    console.log(filterCriteria)

    const filteredItems = (filterCriteria) => {
        const filterKeys = Object.keys(filterCriteria);
        return works.filter(eachObj => {
            return filterKeys.every(eachKey => {
                if (!filterCriteria[eachKey].length) {
                    return true; // Jeigu nera reiksmiu filtre, filtras yra ignoruojamas

                }
                return filterCriteria[eachKey].includes(eachObj[eachKey]);
            });
        });
    };


    return(
        <>
            {(addWork) && <AddWork onSave={onSaveWorkHandler}/>}
        <Card>
            <Card.Header>
                <Card.Header>{(addWork)?
                    <Button className="btn btn-danger" onClick={closeFormHandler}>Atšaukti</Button>:
                    <Button className="btn btn-primary" onClick={()=>{setAddWork(true)}}>Pridėti</Button>}
                </Card.Header>
            </Card.Header>
            <Card.Header>
                <Filter criteria={filterHandler}/>
            </Card.Header>
            <WorkTable works={filteredItems(filterCriteria)}/>
        </Card>
        </>
    )
}

export default Works