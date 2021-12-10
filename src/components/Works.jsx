import React, {useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import WorkTable from "./WorkTable";
import Filter from "./Filter";


const Works  = (props)=>{
    const [addWork,setAddWork] = useState(false)
    const[works, setWorks] = useState([])
    const [filterCriteria, setFilterCriteria] = useState({});

    const closeFormHandler = ()=>{
        setAddWork(false)
    }

    const onSaveWorkHandler = (data)=>{
        setWorks((prevData)=>{
            return [data, ...prevData]
        })
        props.status(true)
        closeFormHandler()
    }

    const filterHandler = (criteria)=>{
        setFilterCriteria(criteria)
    }

    console.log(filterCriteria)
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
            <WorkTable works={works}/>
        </Card>
        </>
    )
}

export default Works