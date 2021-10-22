import React, { useState } from 'react'
import Upload from '../upload'

const Payment = ({match}) =>{

    return(
        <div className="container">
            <div className="active-name fw6 f4 tl pa3 ph3">
        <span className="ttc">Make Payment </span>
      </div>
            <div class="row row-card-no-pd f5 fw5 shadow-lg br3 pa3 tc">
               <span>You are to make payment of {match.params.amount} <span>{match.params.typ === "btc" || match.params.typ === "btc" ||
               match.params.typ === "btc"?'Btc': match.params.typ === "eth" || match.params.typ === "eth" ||
               match.params.typ === "eth"?'Eth':match.params.typ === "ltc" || match.params.typ === "ltc" ||
               match.params.typ === "ltc"?'Ltc':null}</span> using your preferred mode of payment below.</span>
              
               
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
                    <p>This is where I network and build my professional protfolio.</p>
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
                    <p>This is where I read news and network with different social groups.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                       <img className="i" src="https://icongr.am/fontawesome/paypal.svg?size=128&color=ffffff" alt="" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a>Litcoin address</a>
                    </h3>
                    <p>Coming soon.</p>
                </div>
            </div>
        </div>
        </div>
    
        <div className="f5 fw5">
            <span>Upload Payment proof after payment.
</span>
 {/* upload */}
 <div>
     <Upload from={'deposit'} title={'upload payment prove'} amount={match.params.amount} plan={match.params.plan}/>
 </div>
        </div>
    </div>
    </div>
    )
}
export default Payment