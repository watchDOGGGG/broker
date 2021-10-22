import React, { useState } from 'react'

const SendSwift = ({key,fname,lname,bal,active,profit,deposit,bonus,id}) =>{
    const [msg,setMsg] = useState('')
    const [error,setError] = useState('')

    const SendSwiftCode = async()=>{
        const SendCode = await fetch(`http://localhost:4000/sendCode/:${id}`)
        const res = await SendCode.json()
        if(res.data){
            setMsg(res.data)
            setError('')
        }else{
            setError(res.error)
            setMsg('')
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
        <td><button class="btn btn-primary" onClick={SendSwiftCode}>
         send swift
        </button>
        <span className="db tc">{msg}</span>
        <span className="db tc">{error}</span>
        </td>
    </tr>
    )
}
export default SendSwift