import {Card, Table} from "react-bootstrap";
import Work from "./Work";
import React from "react";
import * as service from "../services/worksServices"



const WorkTable = (props)=>{


    const getIdHandler = (id)=>{
        service.deleteWork(id)
    }
return(
    <>
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
                <th>Šalinimas</th>
                <th>Redagavimas</th>
            </tr>
            </thead>
            <tbody>
            {!!props.works.length && props.works.map((w, i)=><Work
                key={i} date={w.date}
                id={w.id}
                company={w.company}
                service={w.service}
                description={w.description}
                timeFrom = {w.timeFrom}
                timeTo={w.timeTo}
                onDelete={getIdHandler}
            />)}
            </tbody>
        </Table>
    </Card.Body>
    </>
)




}

export default WorkTable