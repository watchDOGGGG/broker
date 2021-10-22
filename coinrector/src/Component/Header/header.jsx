import React from 'react'
import HeaderCont from './headerCont'
import {EnvironmentOutlined,ClockCircleOutlined,DollarCircleOutlined,WalletOutlined} from '@ant-design/icons';

const Header = () =>{

    return(
        <div>
            <div className="f-header flex w-100">
                <div className="f-s-r tl w-70">
                <li><a className="link b" href=""><span className="yellow b"><EnvironmentOutlined /></span> 73 HOLBURN STREET. 01224</a></li>
                <li><a className="link b" href=""><span className="yellow b"><ClockCircleOutlined /></span> Mon – Sat: 9:00am–18:00pm. Sunday CLOSED</a> </li>
                </div>
                <div className="f-s-l tr">
                <li><a className="link b" href=""><span className="yellow b"><DollarCircleOutlined /></span> btc usd</a></li>
                <li><a className="link b" href=""><span className="yellow b"><WalletOutlined /></span> payments</a></li>
                
                </div>
            </div>
            <div className="s-header container-fluid ttu b">
                <li><a className="link black hover-yellow" href="">Logo</a> </li>
                <li><a className="link black hover-yellow" href="/home">Home</a></li>
                <li><a className="link black hover-yellow" href="/about">About us</a></li>
                <li><a className="link black hover-yellow" href="/investment">Investments</a></li>
                <li><a className="link black hover-yellow" href="/news">News</a></li>
                <li><a className="link black hover-yellow" href="/faq">F.A.Q</a></li>
                <li><a className="link black hover-yellow" href="/support">support</a></li>
                <li><a class="f6 grow no-underline br-pill ph3 pv1 mb2 dib white bg-black white f6" href="/register">Register</a></li>
                <li><a class="f6 grow no-underline br-pill ph3 pv1 mb2 dib white bg-black white f6" href="/login">Login</a></li>
                
            </div>
            
            {/* header content to display */}
            <HeaderCont/>
        </div>

    )
}
export default Header