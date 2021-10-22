import { Tabs} from 'antd';
import Deposit from '../TransH/deposit'
import Withdrawal from '../TransH/withdrawals'
import React, { useState,useEffect } from 'react'
import NDeposit from './newDeposit'
import Cashout from './Withdraw/iniciateWit'
const { TabPane } = Tabs;
const DepositWit = ()=>{

  const [deposit,setDepo] = useState([])

  useEffect(()=>{
    GetAllDeposit()
  })
  const GetAllDeposit = async() =>{
    const getAl = await fetch('http://localhost:4000/getDeposit',{headers:{token:localStorage.token}})
    const res = await getAl.json()
    if(res.data){
      setDepo(res.data)
    }
  }

  return (
    <div className="card-container">
      <div className="active-name fw6 f4 tl pa3 ph3">
        <span className="ttc">Deposit / Withdrawal</span>
      </div>
      <div class="row mb-5">
        <div class="col card bg-light shadow-lg">

          <Tabs type="card" centered>
            <TabPane tab="Deposit" key="1">
                          <div className="tl pa2">
                              <NDeposit/>
                           </div>
                          <Deposit DepositRe={deposit}/>
            </TabPane>
            <TabPane tab="Withdrawals" key="2">
            <div className="tl pa2">
                              <Cashout/>
                           </div>
              <Withdrawal />
            </TabPane>
          </Tabs>

        </div>
      </div>
    </div>
  )
}
export default DepositWit