import React from 'react'

const SideBar = () => {

    return(
        <div>
            <div className="fix top-0 bg-blue header-menu">
                <div className="dib">
                    <li className="link dib white"><a href="/update/update">Update</a></li>
                    <li className="link dib white"><a href="/deposit">Deposit</a></li>
                    <li className="link dib white"><a href="/update/swift">send-swift</a></li>
                </div>
            </div>
        </div>
    )
}
export default SideBar