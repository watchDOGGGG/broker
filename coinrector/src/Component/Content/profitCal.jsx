import React, { useEffect } from 'react'

const Calcu = ()=>{

    
    return(
        <section>
            <div className="mt3">
            <div className="section-header">
                   <figure className="sec-h">Profit calculator</figure>
                </div>
                <div class="cf flex center bg-light-gray w-100 pa3">
                        <dl class="fl fn-l w-40 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0">Your Target ($)</dd>
                            <dd class="f3 fw6 ml0 pa2">
                                <input className="tc pa2" type="number" name="" placeholder="10000" id="" />
                            </dd>
                        </dl>
                        <dl class="fl fn-l w-40 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0">Duration (years)</dd>
                            <dd class="f3 fw6 ml0 pa2">
                                <input className="tc pa2" type="number" name="" placeholder="10000" />
                            </dd>
                        </dl>
                        <dl class="fl fn-l w-40 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0">DAILY PROFIT</dd>
                            <dd class="f5 fw6 ml2 pa1 dib"> $50.00</dd>
                        </dl>
                        <dl class="fl fn-l w-40 dib w-auto-l lh-title mr5-l">
                            <dd class="f4 b fw6 ml0">TOTAL PROFIT</dd>
                            <dd class="f5 fw6 ml2 pa1 dib">$1500.00</dd>
                        </dl>
                    </div>
                            </div>
            </section>
    )
}
export default Calcu