import React from 'react'
import {SortAscendingOutlined} from '@ant-design/icons';
const Deposit = ({DepositRe}) =>{

    return(
        <div>
            <div class="row mb-5">
						<div class="col card bg-light shadow-lg">
							<div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
								
                            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Amount</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Payment mode</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Plan</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Status</th>
                        <th scope="col">Date created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DepositRe.length > 0?
                        DepositRe.map((user,i)=>{
                                return (
                                    <tr>
                                        <th scope="row">{i}</th>
                                        <td className="black">{user.amount}</td>
                                        <td>{user.Ptype}</td>
                                        <td className="black">{user.plan}</td>
                                        <td>{user.status}</td>
                                        <td>{user.date}</td>
                                    </tr>
                                )
                                
                            })
                        :
                        <p class="tc center">No deposit made yet</p>
                    }
                    
                </tbody>
            </table>
							</div>
						</div>
					</div>
        </div>
    )
}
export default Deposit