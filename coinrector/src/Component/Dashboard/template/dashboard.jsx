import React from 'react'
import TradingViewWidget from 'react-tradingview-widget';

 
const Dashboard = ({UserData}) =>{

    return(
        <div>
            {/* active name */}
            {/* statictis card */}
            
            
            <div>
                <div className="active-name fw6 f4 tl pa3 ph3">
                    <span className="ttc">Welcome,&nbsp;{UserData.firstname}&nbsp;{UserData.lastname}</span>
                </div>
                <div className="w-100">
                {/* <!-- Beginning of  Dashboard Stats  --> */}
                    <div class="row row-card-no-pd bg-light shadow-lg br3">
                        <div class="col-sm-6 col-md-3">
                            <div class="card card-stats card-round bg-light">
                                <div class="card-body ">
                                    <div class="row flex">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                                <img className="w-60" src="https://icongr.am/fontawesome/download.svg?size=128&color=db711a" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-stats">
                                            <div class="numbers">
                                                <p class="card-category">Deposited</p>
                                                <h4 class="card-title text-dark f5">{UserData.deposit}</h4>  
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-sm-6 col-md-3">
                            <div class="card card-stats card-round bg-light">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                            <img className="w-60" src="https://icongr.am/fontawesome/gift.svg?size=128&color=db1a40" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-stats">
                                            <div class="numbers">
                                                <p class="card-category">Bonus</p>
                                                <h4 class="card-title text-dark f5">{UserData.bonus}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 col-md-3">
                            <div class="card card-stats card-round bg-light">
                                <div class="card-body ">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                            <img className="w-60" src="https://icongr.am/fontawesome/money.svg?size=128&color=1adb3a" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-stats">
                                            <div class="numbers">
                                                <p class="card-category">Balance</p>
                                                <h4 class="card-title text-dark f5">{UserData.balance}</h4> <br/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="card card-stats card-round bg-light">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                            <img className="w-60" src="https://icongr.am/fontawesome/envelope.svg?size=128&color=db1a1a" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-stats">
                                            <div class="numbers">
                                                <p class="card-category">Total Packages</p>
                                                                                                <h4 class="card-title text-dark">0</h4>
                                                                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="card card-stats card-round bg-light">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-5">
                                            <div class="icon-big text-center">
                                            <img className="w-60" src="https://icongr.am/fontawesome/envelope-open.svg?size=128&color=1a5adb" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-stats">
                                            <div class="numbers">
                                                <p class="card-category">Active Packages</p>
                                                
                                                                                                <h4 class="card-title text-dark">0</h4>
                                                                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                      {/* forex trade 2 */}
                      <div className="stat-forex w-100 container-fluid mt5">
                        <div className="stat-forex-c  w-auto center br3">
                            {/* content */}
                            <div>
                                <TradingViewWidget symbol="NASDAQ:AAPL" />
                            </div>
                        </div>
                    </div>

                    {/* forex trade 1 */}
                    <div className="stat-forex-CUR w-80 pa2 container-fluid mt5">
                    <div className="gray f6 ttu">
                        <span>crypto currency market exchange rate using etherum</span>
                    </div>
                        <div className="stat-forex-c  w-auto center br3">
                            {/* content */}
                            <div>
                                <div class="coinpaprika-currency-widget"
                                    data-currency="btc-bitcoin"></div>
                                <div class="coinpaprika-currency-widget"
                                    data-currency="xrp-xrp"></div>
                            </div>
                        </div>
                    </div>
                    {/* forex trade 3 */}
                    <div className="stat-forex-CUR w-80 pa2 container-fluid mt5">
                        <div className="stat-forex-c  w-auto center br3">
                            {/* content */}
                            <div>
                                {/* <!-- TradingView Widget BEGIN --> */}

                                {/* <!-- TradingView Widget END --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
