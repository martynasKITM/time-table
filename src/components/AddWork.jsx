import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import { BsFillArchiveFill } from "react-icons/bs";
import Companies from "./companies/Companies";
import Services from "./services/Services";
const AddWork = ()=>{
    return(
       <>
           <Card>
               <Card.Header>Pridėkite atliktą darbą<BsFillArchiveFill/></Card.Header>
               <Card.Body>
                   <Form>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Pasirinkite datą:</Form.Label>
                           <Form.Control type="date" />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <FloatingLabel controlId="floatingSelect" label="Pasirinkite įmonę">
                               <Form.Select aria-label="Floating label select example" >
                                    <Companies/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <FloatingLabel controlId="floatingSelect" label="Pasirinkite suteiktą paslaugą">
                               <Form.Select aria-label="Floating label select example"  >
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
                               />
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Nuo:</Form.Label>
                           <Form.Control type="time" placeholder="N"  />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Iki:</Form.Label>
                           <Form.Control type="time" placeholder="Enter email" />
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