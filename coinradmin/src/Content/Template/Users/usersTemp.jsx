import React from 'react'
import Update from './UpdateInfo'
const UsersTemp = ({key,fname,lname,bal,active,profit,deposit,bonus,id}) =>{

    const DeleteUser = async()=>{
        const deleteData = await fetch(`http://localhost:4000/DeleteUser/${id}`)
        const res = await deleteData.json()
        if(res.data){
            window.location.href = '/'
        }
    }
    return(
        <tr>
        <th scope="row">{key}</th>
        <td>{fname}&nbsp;{lname}</td>
        <td>{active}</td>
        <td>{bal}</td>
        <td>{profit}</td>
        <td>{deposit}</td>
        <td>{bonus}</td>
        <td><button class="btn btn-primary" onClick={DeleteUser}>
         delete
        </button></td>
        <td><Update id={id} name={`${fname} ${lname}`} /></td>
    </tr>
    )
}
export default UsersTemp