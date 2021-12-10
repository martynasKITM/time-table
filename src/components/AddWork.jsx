import React, {useState} from "react";
import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import { BsFillArchiveFill } from "react-icons/bs";
import Companies from "./companies/Companies";
import Services from "./services/Services";

const AddWork = (props)=>{
    const [items, setItems] = useState({
        date:'',
        company: '',
        service:'',
        description:'',
        timeFrom:'',
        timeTo:''
    })

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
    return(
       <>
           <Card>
               <Card.Header>Pridėkite atliktą darbą<BsFillArchiveFill/></Card.Header>
               <Card.Body>
                   <Form onSubmit={submitHandler}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Pasirinkite datą:</Form.Label>
                           <Form.Control type="date" name="date" value={items.date} onChange={handleChange} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <FloatingLabel controlId="floatingSelect" label="Pasirinkite įmonę">
                               <Form.Select aria-label="Floating label select example"  name="company" value={items.company} onChange={handleChange}>
                                    <Companies/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <FloatingLabel controlId="floatingSelect" label="Pasirinkite suteiktą paslaugą">
                               <Form.Select aria-label="Floating label select example" name="service" value={items.service} onChange={handleChange} >
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
                       <Button variant="primary" type="submit">
                           Saugoti
                       </Button>
                   </Form>
               </Card.Body>
           </Card>
           </>
    )
}

export default AddWork