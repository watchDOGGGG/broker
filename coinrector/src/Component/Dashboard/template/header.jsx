import React from 'react'
import {
    BellOutlined,
    UserOutlined,
    PoweroffOutlined
  } from '@ant-design/icons';
  
const Header = ({UserData,balance}) =>{

    const Logout = ()=>{
        localStorage.removeItem("token")
        window.location.href="/home"
    }
    
    return(
        <div>
            <div className="header-con bg-blue">
                <div className="tr hea-dir b f4 b fw6">
                    <span className="pointer"><a href="/profile"><UserOutlined /></a></span>
                    <span className="pointer"><a href="/notification"><BellOutlined /></a></span>
                    <span className="pointer"><a href="/notification" className="white">{UserData.currency} {balance}</a></span>
                    <span className="pointer" onClick={Logout}><PoweroffOutlined /></span>
                    </div>            
            </div>
        </div>
    )
}
export default Header