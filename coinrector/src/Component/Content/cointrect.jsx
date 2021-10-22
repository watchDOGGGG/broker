import React from 'react'
import verifiedIMg from './UKIMG/uk-verify.png'
import paidIMg from './UKIMG/instant.png'
import Ref2 from './UKIMG/ref-2.jpg'

const Landing = () =>{

    return(
        <section className="mt3">
            <div className="w-100 flex">
                <div className="w-50 dib">
                <div className="section-header">
                   <figure className="sec-h">Welcome to Coinrector</figure>
                </div>
                <p className="tc tj pa0 w-90">Coinrector & Trade Limited is quite young company from the United Kingdom but has excellent prospects for development. Our company is engaged in trading in Forex & Bitcoin Cryptocurrency market as well as on the London Stock Exchange. Our Company has launched a unique investment program to raise the basic financial assets and trade. This website is fully automated platform which allows us to accept investments and make payments of profit according to chosen terms. Investors' funds are distributed evenly to participate in trading on the Forex & Bitcoin Cryptocurrency market. Online investments exactly can be called the most comfortable ones because in order to deposit funds, you don’t need to go anywhere. It is enough to have a personal computer with access to the Internet. Another clear advantage is a possibility to invest small sums starting from $200. If you want to join us to consistently earn over a long time period all you need is just to register on our website and make a deposit. You grow, we grow. Your success is our success.</p>
                </div>
                <div className="w-50 dib">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Um63OQz3bjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
            </div>
            <div>
                    <div className="registerd bg-near-white pa3">
                        <div className="w-50 dib f4 fw5">
                        UK Registerd Company.
                        <div className="flex">
                            <img src={verifiedIMg} alt="" />
                            <p className="f5 fw3 tj">Coinrector Trade Limited is a registered investment company incorporated in the United Kingdom.</p>
                        </div>
                        </div>
                        <div className="w-40 dib f4 fw5 ml4">
                        Instant Payment.
                        <div className="flex">
                        <img src={paidIMg} alt="" />
                            <p className="f5 fw3 tj">We work with popular e-currencies with instant payment, including PerfectMoney, Payeer & BitCoin.</p>
                        </div>
                        </div>
                    </div>

                {/* refferal */}
                <div className="registerd bg-near-white pa3">
                <tbody>
                        <tr>
                        <td>
                            <img src={Ref2}/></td>
                            <td style={{background:'url("https://study-eu.s3.amazonaws.com/uploads/image/path/381/wide_fullhd_uk-london-tower-bridge-at-dawn.jpg")no-repeat',height:'125px', width:'438px',color:'#FFFFFF',fontSize:'22px',textAlign:'center',lineHeight:'32px'}}>
            <a href="https://beta.companieshouse.gov.uk/company/10531104" target="_blank">
                <font color="#FFFFFF">Certificate
                    Of Incorporation<br/>Company Number: <span style={{borderBottom:'3px solid #f59e2c'}}>10531104</span>
                    </font>
                </a>
        </td>
    </tr>
</tbody>
                   </div> 
                </div>
        </section>
    )
}
export default Landing