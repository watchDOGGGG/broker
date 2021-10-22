import React, { useState } from 'react'

const PaymentWithdraw = ({match,Error,Data}) =>{

    const [erromsg,setError] = useState('')
    const [swift,setSwift] = useState(false)
    const [msg,setSwiftNsg] = useState('')
    const withdrawProcess = async () => {
        const Process = await fetch('http://localhost:4000/Requestwithdraw',{
            method:'POST',
            headers:{"content-Type":"application/json",token:localStorage.token},
            body:JSON.stringify({amount:match.params.amount})
        })
        const res = await Process.json()
        if(res.error){
            setError(res.error)
        }else if(res.data){
            setSwift(true)
            setSwiftNsg(res.data)
        }
    }
    return(
        <div className="container">
            <div className="active-name fw6 f4 tl pa3 ph3">
        <span className="ttc">Cashout</span>
      </div>
            <div class="row row-card-no-pd f5 fw5 shadow-lg br3 pa3 tc">
               <span>you requested a cashout of ${match.params.amount} using your preferred mode of payment below.</span>
               
                {/* payment card */}
                <div class="Paymentcontainer">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-bitcoin" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a>Bitcoin address</a>
                    </h3>
                    <p>{Data.Btc}</p>
                    {
                                    Data.Btc > 0 ?
                                        <button className="btn btn-primary" onClick={withdrawProcess}>Withdraw</button>
                                        : null
                                }

                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img className="i" src="https://icongr.am/material/ethereum.svg?size=128&color=ffffff" alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a>Ethereum address</a>
                    </h3>
                    <p>{Data.Eth}</p>
                    {
                                    Data.Eth > 0 ?
                                        <button className="btn btn-primary" onClick={withdrawProcess}>Withdraw</button>
                                        : null
                                }
                    
                </div>
                
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                       <img className="i" src="https://icongr.am/fontawesome/bank.svg?size=128&color=ffffff" alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a>your bank info</a>
                    </h3>
                    <div className="tj">
                    <p>BankName: {Data.BankName}</p>
                    <p>Account Number: {Data.AcctNum}</p>
                    <p>AccountName: {Data.AcctName}</p>
                    </div>
                    {
                                    Data.BankName > 0 && Data.AcctNum >0 && Data.AcctName>0?
                                        <button className="btn btn-primary" onClick={withdrawProcess}>Withdraw</button>
                                        : null
                                }
                    <button className="btn btn-primary" onClick={withdrawProcess}>Withdraw</button>
                </div>
            </div>
                    </div>
                </div>
                    <label htmlFor="pass" className="green f5">{msg}</label>
                <div className="tc">
                    <span className="red f5">{Error}</span>
                    <span className="red f5">{erromsg}</span>
                </div>
            </div>
        </div>
    )
}
export default PaymentWithdraw