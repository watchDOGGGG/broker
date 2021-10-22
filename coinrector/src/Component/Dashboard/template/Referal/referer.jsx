import React from 'react'
import ReferalList from './referalList'
const Referer = () =>{
    return(
        <div>
            <div className="active-name fw6 f4 tl pa3 ph3">
                <span className="ttc">Refer users to coinrector community</span>
            </div>
            <div class="row row-card-no-pd bg-light shadow-lg br3">
                <div class="col-12 text-center card bg-light shadow-lg p-3 text-dark">
                    <strong>You can refer users by sharing your referral link:</strong><br />
                    <h4 style={{color:"green"}}> https://coinrector.com//ref/164</h4> <br/>
                        <h3 class="title1">
                            <small>Referal profit</small><br />
                            <img className="20" src="https://icongr.am/fontawesome/retweet.svg?size=128&color=currentColor" alt="" /><br />
                            <small className="f5">you get a 5% bonus everytime any of your refered users make a deposit, referal bonus are updated after 24hurs</small>
                        </h3>
                        </div>
                </div>

                <ReferalList/>
            </div>
    )
}
export default Referer