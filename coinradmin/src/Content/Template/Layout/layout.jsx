import React from 'react'
import Users from '../Users/users'
import SideBar from '../SideBar/sidebar'
import Deposit from '../Users/Deposit/deposit'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Layout extends React.Component{

    render(){
        return (
            <Router>
                <SideBar />

                <Switch>
                    <Route path="/update/:update" exact component={Users}/>
                    <Route path="/deposit" exact component={props=> <Deposit/>}/>
                </Switch>
            </Router>
        )
    }
}
export default Layout