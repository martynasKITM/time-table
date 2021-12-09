import React from "react";
import companies from "../../data/companies";
import Company from "./Company";


const Companies = ()=>{
console.log(companies)
    return(
        <>
            {companies.map((c)=><Company key={c.code} company={c.title}/>)}
        </>

    )

}




export default Companies
