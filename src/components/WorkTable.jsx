import {Card, Table} from "react-bootstrap";
import Work from "./Work";
import React from "react";

const WorkTable = (props)=>{
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
            </tr>
            </thead>
            <tbody>
            {!!props.works.length && props.works.map((w, i)=><Work
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
    </>
)




}

export default WorkTable