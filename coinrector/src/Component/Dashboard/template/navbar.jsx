import React, { useEffect } from 'react'
import Avatar from '../../Content/UKIMG/avatar.jpg'
const DashLayout = ({UserData,profileImg}) => {
 
    return (
     <div>
       <nav class="" tabindex="0">
	<div class="smartphone-menu-trigger"></div>
  <header class="avatar">
		<img src={profileImg?profileImg.url:Avatar} alt="" className="w-20"/>
    <h2>{UserData.firstname}</h2>
  </header>
	<ul>
  <a href="/dashboard"><li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li></a>
    <a href="/profile"><li tabindex="0" class="icon-users"><span>Account</span></li></a>
    <a href="/transactionhistory"><li tabindex="0" class="icon-transaction"><span>Transactions history</span></li></a>
    <a href="/deposit/withdrawal"><li tabindex="0" class="icon-credit-card"><span>Deposit/withdrawal</span></li></a>
    <a href="/packages"><li tabindex="0" class="icon-briefcase"><span>Packages</span></li></a>
    <a href="/referers"><li tabindex="0" class="icon-cycle"><span>Refer Users</span></li></a>
  </ul>
</nav>

     </div>
    );
  
}
export default DashLayout