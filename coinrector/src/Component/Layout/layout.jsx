import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Auth from '../Authentication/landing'
import About from '../Pages/about'
import Faq from '../Pages/Faq/faq'
import Login from '../Authentication/login'
import Register from '../Authentication/register'
import Loading from '../Loading/loading'
import NavBar from '../Dashboard/template/navbar'
import Dashboard from '../Dashboard/template/dashboard'
import Support from '../Dashboard/template/support'
import Profile from '../Dashboard/template/profile'
import Notification from '../Dashboard/template/notification'
import History from '../Dashboard/template/history'
import Package from '../Dashboard/template/myplans'
import Referer from '../Dashboard/template/Referal/referer'
import DepositWith from '../Dashboard/template/DepositWith/depositWit'
import Payment from '../Dashboard/template/DepositWith/payment'
import TransH from '../Dashboard/template/TransH/transhistory'
import Header from '../Dashboard/template/header'
import './sty.css'

class Layout extends React.Component{

    constructor(){
        super()
        this.state = {
            route:0,
            userData:[],
            Image:'',
            balance:''
        }
    }
    componentDidMount() {
        try {
            this.CheckLoginsession()
            this.getUserLoggedIN()
            // this.GetUserImage()
        } catch (error) {
        }
    }
    
    // componentDidUpdate = async()=>{
    //     const getBalance = await fetch('http://localhost:4000/getBalance',{
    //         headers:{token:localStorage.token}
    //     })
    //     const res = await getBalance.json()
    //     if(res.data){
    //         this.setState({balance:res.data})
    //     }
    // }
    GetUserImage = async () =>{
        const GetDt = await fetch('http://localhost:4000/profileImg',{
            headers:{token:localStorage.token}
        })
        const res = await GetDt.json()
        if(res.data){
            this.setState({Image:res.data})
        }
    }
    getUserLoggedIN = async ()=>{
        const GetDt = await fetch(`http://localhost:4000/GetDetails`,{
            headers:{token:localStorage.token},
        })
        const res = await GetDt.json()
        if(res.data){
            this.setState({userData:res.data})
        }
    }
    CheckLoginsession = async () => {
        const check = await fetch(`http://localhost:4000/verifyJwt`, {
            headers:{token:localStorage.token},
        })
        const response = await check.json()
        if (response.true) {
            this.setState({ route: 2 })
        } else {
            this.setState({ route: 1 })
        }
    }
    UpdateRoute = (route) =>{
        this.setState({route:route})
    }
    redirectHome = (route) =>{
        if(route === true){
            window.location.href = "/dashboard"
        }
    }
    redirectLogin = (route) =>{
        if(route === true){
            window.location.href = "/login"
        }
    }

    render(){
        const {route,userData,Image,balance} = this.state 
        return (
            <Router>
                 <>
                {
                    route === 2?
                    <Switch>
                    
                <div className="full-con flex w-100">
                    {
                        route === 2 ?
                            <>

                                <div className="navba menu navside">
                                    <NavBar  UserData={userData} profileImg={Image}/>
                                </div>
                            </>
                            : null}
                    <div className="c-side main absolute right-0">
                    
                    <Header  UserData={userData} balance={balance}/>
                                    <div class="helper">
                                    <Route path="/" exact component={props =>
                                                <Dashboard UserData={userData}/>
                                            } />
                                            <Route path="/dashboard" exact component={props =>
                                                <Dashboard UserData={userData}/>
                                            } />
                                            <Route path="/support" exact component={props =>
                                                <Support />
                                            } />
                                            <Route path="/notification" exact component={props =>
                                                <Notification />
                                            } />
                                        <Route path="/history" exact component={props =>
                                                <History />
                                            } />
                                            <Route path="/transactionhistory" exact component={props =>
                                                <TransH />
                                            } />
                                            <Route path="/profile" exact component={props =>
                                                <Profile UserData={userData} profileImg={Image}/>
                                            } />
                                            <Route path="/packages" exact component={props =>
                                    <Package />
                                        }/>
                                        <Route path="/referers" exact component={props =>
                                    <Referer />
                                        }/>
                                        <Route path="/deposit/withdrawal" exact component={props =>
                                    <DepositWith />
                                        }/>
                                        <Route path="/payment/:type/:amount/:plan/:typ" exact component={
                                            Payment
                                        }/>
                                    </div>
                                </div>
                            </div>

                        </Switch>
                    :route === 1?
                                <Switch>
                                    <Route path="/about" exact component={props =>
                                        <About />
                                            } />
                                    <Route path="/faq" exact component={props =>
                                        <Faq />
                                    } />
                                <Route path="/login" exact component={props =>
                                    <Login setUpdateRoute={this.UpdateRoute} redirectHome={this.redirectHome}/>
                                } />
                                <Route path="/register" exact component={props =>
                                    <Register redirectLogin={this.redirectLogin}/>
                                } />
                                <Route path="/home" exact component={props =>
                                    <Auth />
                                        }/>
                                        <Route path="/" component={props =>
                                    <Auth />
                                        }/>
                               </Switch>
                            :
                            <Loading />
                        }
                        
                        </>
            </Router>
        )
    }
}
export default Layout