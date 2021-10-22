import { Tabs } from 'antd';
import Deposit from './deposit'
import Withdrawal from './withdrawals'
import { useEffect, useState } from 'react';
const { TabPane } = Tabs;
const TransH = ()=>{

  const [depositRe,setDepositRecord] = useState([])
  useEffect(()=>{
    GetDepositHistory()
  })
  const GetDepositHistory = async() =>{
    const fetchData = await fetch('http://localhost:4000/getDeposit',{
      headers:{token:localStorage.token}
    })
    const res = await fetchData.json()
    if(res.data){
      setDepositRecord(res.data)
    }
  }
  return (
    <div className="card-container">
      <div className="active-name fw6 f4 tl pa3 ph3">
        <span className="ttc">Transaction History</span>
      </div>
      <div class="row mb-5">
        <div class="col card bg-light shadow-lg">

          <Tabs type="card" centered>
            <TabPane tab="Deposit" key="1">
              <Deposit DepositRe={depositRe}/>
            </TabPane>
            <TabPane tab="Withdrawals" key="2">
              <Withdrawal />
            </TabPane>
          </Tabs>

        </div>
      </div>
    </div>
  )
}
export default TransH