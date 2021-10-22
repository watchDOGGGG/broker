import React, { useState,useEffect } from 'react'

const DepositData = ({key,status,date,amount,type,user,plan,id}) =>{
    const [fullName,setFullname] = useState([])

    useEffect(()=>{
        getDetailsUser()
    })

    const getDetailsUser = async() =>{
        const getFullName = await fetch(`http://localhost:4000/GetDetails/${user}`)
        const res = await getFullName.json()
        if(res.data){
            setFullname(res.data)
        }
    }

    const UpdateStatus = async(val)=>{
        const SendCode = await fetch(`http://localhost:4000/updateDepositStatus/${user}/${val}/${id}/${plan}/${type}/${amount}`)
        const res = await SendCode.json()    
        if(res.data){
            // window.location.hred="/deposit"
        } 
    }

    return(
        <tr>
        <th scope="row">{key}</th>
        <td scope="row">{fullName.firstname}&nbsp;{fullName.lastname}</td>
        <td scope="row">{type}</td>
        <td scope="row">{amount}</td>
        <td scope="row">{plan}</td>
        <td scope="row">{status}</td>
        <td scope="row">{date}</td>
        {
            status === 'pending'?
                    <>
                        <td><button class="btn btn-primary" onClick={e => UpdateStatus('approve')}>
                            approve
        </button>
                        </td>
                        <td><button class="btn btn-primary" onClick={e => UpdateStatus('decline')}>
                            decline
        </button>
                        </td>
                    </>
                    : <span>{status}</span>
        }
        
    </tr>
    )
}
export default DepositData