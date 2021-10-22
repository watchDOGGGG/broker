import React, { useEffect, useState } from 'react'
import UsersCrd from './usersCrd'

const Users = ({match}) =>{

    const [Data,setData] = useState([])

    useEffect(()=>{
        GetAllUsers()
    })
    const GetAllUsers = async()=>{
        const GetData = await fetch('http://localhost:4000/FetchAllUsers')
        const res = await GetData.json()
        if(res.data){
            setData(res.data)
        }
    }
    
    return(
        
        <div>
            {
                Data.length > 0 ?
                <UsersCrd AllData={Data} url={match.url}/>
                :
                <p>No user avalaible yet</p>
            }
              
        </div>
    )
}
export default Users