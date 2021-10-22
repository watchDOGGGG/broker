import React from 'react'
import {SortAscendingOutlined} from '@ant-design/icons';
const Withdrawal = () =>{

    return(
        <div>
        <div class="row mb-5">
                    <div class="col card bg-light shadow-lg">
                        <div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
                            
                        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col"><SortAscendingOutlined />&nbsp;Amount requested</th>
                    <th scope="col"><SortAscendingOutlined />&nbsp;Amount charges</th>
                    <th scope="col"><SortAscendingOutlined />&nbsp;Recieving mode</th>
                    <th scope="col"><SortAscendingOutlined />&nbsp;Status</th>
                    <th scope="col">Date created</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
        </table>
                        </div>
                    </div>
                </div>
    </div>
    )
}
export default Withdrawal