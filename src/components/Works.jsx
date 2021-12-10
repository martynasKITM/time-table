import React, {useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Work from "./Work";

const Works  = (props)=>{
    const [addWork,setAddWork] = useState(false)
    const[works, setWorks] = useState([])

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
    console.log(works)
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
            <Card.Header><h3>Darbų sąrašas:</h3></Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th>Klientas</th>
                        <th>Suteikta paslauga</th>
                        <th>Aprašymas</th>
                        <th>Trukmė</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!!works.length && works.map((w, i)=><Work
                        key={i} date={w.date}
                        company={w.company}
                        service={w.service}
                        description={w.description}
                        timeFrom = {w.timeFrom}
                        timeTo={w.timeTo}
                    />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        </>
    )
}

export default Works