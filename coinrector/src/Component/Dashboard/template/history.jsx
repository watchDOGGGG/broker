import React from 'react'
import {SortAscendingOutlined} from '@ant-design/icons';
const Support  = () =>{

    return(
        <div>
            <div className="active-name fw6 f4 tl pa3 ph3">
                    <span className="ttc">Your ROI history</span>
            </div>

            <div class="row mb-5">
						<div class="col card bg-light shadow-lg">
							<div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
								
                            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Plan</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Amount</th>
                        <th scope="col"><SortAscendingOutlined />&nbsp;Type</th>
                        <th scope="col">Date created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                    
                </tbody>
            </table>
							</div>
						</div>
					</div>
        </div>
    )
}
export default Support