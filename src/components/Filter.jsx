import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Companies from "./companies/Companies";
import  Services from "./services/Services"
const Filter = (props)=>{
    const [search, setSearch] = useState({})

    const handleChange = (e)=>{
        setSearch(
            {
                ...search,
                [e.target.name]:e.target.value
            }
        )
    }

    useEffect(()=>{
        props.criteria(search)
    },[search])

    const resetFilter = ()=>{
        setSearch({})
    }

    return(
        <div className="input-group">
            <div><label>Duomenų filtravimas:</label></div>
            <Form.Select name="company" defaultValue="--Pasirinkite įmonę--" onChange={handleChange}>
                <option  disabled>--Pasirinkite įmonę--</option>
                <Companies/>
            </Form.Select>
            <Form.Select name="service" defaultValue="--Pasirinkite paslaugą--" onChange={handleChange}>
                <option  disabled>--Pasirinkite paslaugą--</option>
                <Services/>
            </Form.Select>
            <div>
                {Object.keys(search).length && <Button variant="primary" type="reset" onClick={resetFilter}>Valyti</Button>}
            </div>
        </div>
    )

}

export default Filter