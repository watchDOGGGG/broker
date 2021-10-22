import React from 'react'
import UsersTemp from './usersTemp'
import SendSwift from './sendSwift'
const UsersCrd = ({AllData,url}) =>{
    
        return(
            <div>
                <div className="active-name fw6 f4 tl pa3 ph3">
                        <span className="ttc">Your Client record</span>
                </div>
    
                <div class="row mb-5">
                            <div class="col card bg-light shadow-lg">
                                <div class="bs-example widget-shadow table-responsive" data-example-id="hoverable-table"> 
                                    
                                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">&nbsp;fullname</th>
                            <th scope="col">&nbsp;active</th>
                            <th scope="col">&nbsp;balance</th>
                            <th scope="col">&nbsp;profit</th>
                            <th scope="col">&nbsp;deposit</th>
                            <th scope="col">&nbsp;bonus</th>
                            <th scope="col">&nbsp;action</th>
                            {
                                            url === '/update' ?
                                                <th scope="col">&nbsp;edit</th>
                                :
                                null
                            }
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllData.map((user,i)=>{
                                return(
                                    url === '/update/update'?
                                    <UsersTemp 
                                        key={i}
                                        fname={AllData[0].firstname}
                                        lname={AllData[0].lastname}
                                        bal={AllData[0].balance}
                                        active={AllData[0].active}
                                        profit={AllData[0].profit}
                                        deposit={AllData[0].deposit}
                                        bonus={AllData[0].bonus}
                                        id={AllData[0]._id}
                                    />
                                        : url === '/update/swift' ?
                                            <SendSwift
                                                key={i}
                                                fname={AllData[0].firstname}
                                                lname={AllData[0].lastname}
                                                bal={AllData[0].balance}
                                                active={AllData[0].active}
                                                profit={AllData[0].profit}
                                                deposit={AllData[0].deposit}
                                                bonus={AllData[0].bonus}
                                                id={AllData[0]._id}
                                            />
                                            :
                                            null
                                )
                            })
                        }
                    </tbody>
                </table>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
    export default UsersCrd