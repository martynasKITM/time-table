
const Work = (props)=>{

    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.timeFrom}</td>
            <td>{props.timeTo}</td>
        </tr>
    )
}

export default Work