import React from 'react'

const MyPlans = ()=>{

    const sendToDeposit = () =>{
        window.location.href="/deposit/withdrawal"
    }
    return(
        <section>
            <div className="w-100">
            <div className="active-name fw6 f3 tl pa3 ph3 tc">
                    <span className="ttc ">Our plans</span>
            </div>
            <div className="active-name fw6 f3 tl pa3 ph3 tc">
                    <span className="ttc ">Bitcoin plans</span>
            </div>

{/* first */}
                <div class="tableIn dib b">
                    <h2 class="heading">
                        <div className="tc">Stater level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 b bb b--black-10">
                        <p className="dib mr5">Bitcoin</p>
                        <span class="price">0.0010</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.0001</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.0031</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 1 month
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>


{/* second */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Vip level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Bitcoin</p>
                        <span class="price">0.01</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.001</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.024</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 3 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>



{/* third */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Boss level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Bitcoin</p>
                        <span class="price">0.1</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.01</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.14</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 2 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>

                    {/* etherum plan */}
                    <div className="active-name fw6 f3 tl pa3 ph3 tc">
                    <span className="ttc ">Ethereum plans</span>
            </div>

{/* first */}
                <div class="tableIn dib b">
                    <h2 class="heading">
                        <div className="tc">Stater level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 b bb b--black-10">
                        <p className="dib mr5">Ethereum</p>
                        <span class="price">0.014</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.0014</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.045</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 1 month
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>


{/* second */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Vip level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Ethereum</p>
                        <span class="price">0.14</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.014</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.35</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 3 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>



{/* third */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Boss level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Ethereum</p>
                        <span class="price">1.45</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.14</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.14</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 2 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>

                
                    {/* litcoin plan */}
                    <div className="active-name fw6 f3 tl pa3 ph3 tc">
                    <span className="ttc ">Litcoin plans</span>
            </div>

{/* first */}
                <div class="tableIn dib b">
                    <h2 class="heading">
                        <div className="tc">Stater level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 b bb b--black-10">
                        <p className="dib mr5">Litcoin</p>
                        <span class="price">0.22</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.022</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">0.67</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 1 month
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>


{/* second */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Vip level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Litcoin</p>
                        <span class="price">2.17</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">0.22</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">5.21</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 3 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>



{/* third */}
<div class="tableIn dib">
                    <h2 class="heading">
                        <div className="tc">Boss level</div>
                        
  </h2>
                    
                    <div class="block2 tj b f4 bb b--black-10">
                        <p className="dib mr5">Litcoin</p>
                        <span class="price">21.71</span><br />
                        <p className="db dib mr5">Daily profit</p>
                        <span class="price">2.17</span>
                        <br />
                        <p className="db dib mr5">monthly profit</p>
                        <span class="price">30.39</span>
                    </div>
                    <div class="block2 tj b f4">
                        <p>Duration:&nbsp; 2 weeks
                        </p>
                    </div>
                    <button class="btn" onClick={sendToDeposit}>
                        <p>Invest Now</p>
                        <span class="fa fa-cart-plus" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default MyPlans