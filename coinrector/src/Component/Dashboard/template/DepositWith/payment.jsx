import React, { useEffect } from 'react'
import PaymentDeposit from './paymentDeposit'
import PaymentWithdraw from './Withdraw/paymentwithdraw'
const Payment = ({match}) =>{
const [userData,setUserData] = React.useState([])
const [Error,setError] = React.useState([])

useEffect(()=>{
    getUserBankD()
})
   const getUserBankD = async ()=>{
        const GetDt = await fetch(`http://localhost:4000/GetBankD`,{
            headers:{token:localStorage.token},
        })
        const res = await GetDt.json()
        if(res.data){
            setUserData(res.data)
        }else if(res.error){
            setError(res.error)
        }
    }
    return(
        <div>
            {
                match.params.type === 'deposit'?
                <PaymentDeposit match={match}/>
                :<PaymentWithdraw Data={userData} Error={Error} match={match}/>
            }
        </div>
    )
}
export default Payment