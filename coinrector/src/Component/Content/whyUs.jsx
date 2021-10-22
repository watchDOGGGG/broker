import React, { useEffect } from 'react'
import { TeamOutlined} from '@ant-design/icons';

const WhyUS = ()=>{

    
    return(
        <section>
            <div className="w-100 flex pa2 bg-near-white">
                <div className="w-50">
                    <div className="section-header">

                        <iframe width="397" height="262" src="https://www.youtube.com/embed/rpOwTspdwkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="cell-md-10">
                            <blockquote class="quote-simple inset-md-left-15">
                                <div class="quote-body">
                                    <q>Together, we can enable your business to achieve even more.</q>
                                </div>
                    </blockquote>
                            <p class="text-dusty-gray">coinrector leads the industry in wealth management. Our independent RIA and broker services have over 7 years of industry experience.</p>
                        </div>
                    </div>
                </div>

                <div className="w-u-shot w-50 ba b--black-10 tc">
                    <div className="bg-navy white w-u-shot1">
                        <div className="w-u-content">
                            <div className="section-header">
                                <figure className="sec-h f4">Why Choose Us</figure>
                            </div>

                            <div className="w-us-content w-70 flex">
                                <div className="f1 mr2 ml4 yellow flex"><TeamOutlined /></div>
                                <div>
                                    <div className="head-tit tl ttu">Competent Professionals</div>
                                    <p className="tj silver"> We work in an atmosphere of trust and camaraderie, where partners help each other.</p>
                                </div>
                    </div>


                            <div className="w-us-content w-70 tl flex">
                                <div className="f1 mr2 ml4 yellow flex"><TeamOutlined /></div>
                                <div>
                                    <div className="head-tit">QUICK FUNDS WITHDRAWAL</div>
                                    <p className="tj silver">We have planned and implemented an optimal configuration of funds deposit and withdrawal from your balance. Funds are delivered to your balance instantly. Withdrawal is performed in manual mode for the purpose of security and takes from several minutes to several hours after the user has ordered his funds.</p>
                                </div>
                            </div>

                            <div className="w-us-content w-70 tl flex">
                                <div className="f1 mr2 ml4 yellow flex"><TeamOutlined /></div>
                                <div>
                                    <div className="head-tit">FAVOURABLE TERMS</div>
                                    <p className="tj silver">High percents together with short-term (from 1 day Or 30 to 60 days) deposit plans, profit accounting on the following day — that’s what makes our offer extremely attractive both for beginner and experienced members.</p>
                                </div>
                            </div>

                            <div className="bg-yellow w-60 center tc pa2 ph3 pointer">
                                <span>Let's Get you started</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            </section>
    )
}
export default WhyUS