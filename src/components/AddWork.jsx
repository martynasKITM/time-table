import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import { BsFillArchiveFill } from "react-icons/bs";
import Companies from "./companies/Companies";
import Services from "./services/Services";
import {useParams} from "react-router-dom";
import * as service from "../services/worksServices"
import {getWorkById} from "../services/worksServices";

const AddWork = (props)=>{
    const {id} = useParams();
    const [items, setItems] = useState({
        date:'',
        company: '--Pasirinkite įmonę--',
        service:'--Pasirinkite paslaugą--',
        description:'',
        timeFrom:'',
        timeTo:''
    })

    useEffect(()=>{
        id && service.getWorkById(item=>setItems(item), id)
    },[id])

    const handleChange = (e)=>{
        setItems(
            {
                ...items,
                [e.target.name]:e.target.value
            }
        )

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        props.onSave(items)

    }

    const updateHandler =()=>{

    }
    console.log(id);
    return(
       <>
           <Card>
               <Card.Header>Pridėkite atliktą darbą<BsFillArchiveFill/></Card.Header>
               <Card.Body>
                   <Form onSubmit={submitHandler}>
                       <Form.Group className="mb-3" >
                           <Form.Label>Pasirinkite datą:</Form.Label>
                           <Form.Control type="date" name="date" value={items.date} onChange={handleChange} />
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <FloatingLabel >
                               <Form.Select   name="company" value={items.company} onChange={handleChange} >
                                   <option disabled>--Pasirinkite įmonę--</option>
                                    <Companies/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <FloatingLabel >
                               <Form.Select  name="service" value={items.service} onChange={handleChange} >
                                   <option disabled>--Pasirinkite paslaugą--</option>
                                    <Services/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <FloatingLabel controlId="floatingTextarea2" label="Atlikto darbo aprašyma">
                               <Form.Control
                                   as="textarea"
                                   placeholder="Atlikto darbo aprašymas"
                                   style={{ height: '100px' }}
                                   name="description"
                                   value={items.description}
                                   onChange={handleChange}
                               />
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Nuo:</Form.Label>
                           <Form.Control type="time"  name="timeFrom" value={items.timeFrom} onChange={handleChange} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Iki:</Form.Label>
                           <Form.Control type="time" name="timeTo" value={items.timeTo} onChange={handleChange} />
                       </Form.Group>
                       {(id)?
                           <Button variant="primary" type="button" onClick={updateHandler}>
                               Atnaujinti
                           </Button>:
                           <Button variant="primary" type="submit">
                           Saugoti
                           </Button>
                       }
                   </Form>
               </Card.Body>
           </Card>
           </>
    )
}

export default AddWork