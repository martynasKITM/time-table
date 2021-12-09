import React, {useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

const Works  = ()=>{
    const [addWork,setAddWork] = useState(false)

    const closeFormHandler = ()=>{
        setAddWork(false)
    }

    return(
        <>
            {(addWork) && <AddWork/>}
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
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        </>
    )
}

export default Works