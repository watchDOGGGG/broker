import React from 'react'
import {SortAscendingOutlined} from '@ant-design/icons';
const ReferalList = () =>{

    return(
        <div>
            <span className="f5">Your refered users</span>
            <div class="row mb-5">
						<div class="col card bg-light shadow-lg">
							<div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
								
                            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Client Name</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Ref. level</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;parent</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;client status</th>
                        <th scope="col">Date created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
							</div>
						</div>
					</div>
        </div>
    )
}
export default ReferalList