import React, { useEffect, useState } from 'react'
import DepositData from './depositData'
const Deposit = () =>{
    const [Alldeposit,setDeposit] = useState([])

    useEffect(()=>{
        GetAllDeposit()
    })
    const GetAllDeposit = async()=>{
        const getAll = await fetch('http://localhost:4000/getAllDeposit')
        const res = await getAll.json()
        if(res.data){
            setDeposit(res.data)
        }
    }
   
        return(
            <div>
                <div className="active-name fw6 f4 tl pa3 ph3">
                        <span className="ttc">Your Client record</span>
                </div>
    
                <div class="row mb-5">
                            <div class="col card bg-light shadow-lg">
                                <div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
                                    
                                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">&nbsp;fullname</th>
                            <th scope="col">&nbsp;payment type</th>
                            <th scope="col">&nbsp;amount</th>
                            <th scope="col">&nbsp;plan</th>
                            <th scope="col">&nbsp;status</th>
                            <th scope="col">&nbsp;date</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           Alldeposit.length > 0?
                           Alldeposit.map((user,i)=>{
                               return(
                                <DepositData
                                key={i}
                                id={Alldeposit[i]._id}
                                amount={Alldeposit[i].amount}
                                status={Alldeposit[i].status}
                                type={Alldeposit[i].Ptype}
                                user={Alldeposit[i].user}
                                plan={Alldeposit[i].plan}
                                date={Alldeposit[i].date}
                                />
                               )
                           })
                           :
                           <p>No deposit yet</p>
                       }
                    </tbody>
                </table>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
    export default Deposit