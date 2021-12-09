import React from "react";
import companies from "../../data/services";
import Service from "./Service";


const Services = ()=>{

    return(
        <>
            {companies.map((c)=><Service key={c.id} company={c.service}/>)}
        </>

    )

}




export default Services
