import React, { useState } from 'react'

const Login = ({setUpdateRoute,redirectHome}) =>{

// Errors
const [loginError,setLoginError] = useState('')


//For Logins
const [LoginEmail,setLoginEmail] = useState('')
const [Loginpass,setLoginPass] = useState('')

//Functions

// Login
const LoginToAct = async() =>{
	const setLogin = await fetch('http://localhost:4000/Login',{
		method:'Post',
		headers:{"content-Type":"application/json"},
		body:JSON.stringify({
			email:LoginEmail,
			password:Loginpass
		})
	})
	
	const res = await setLogin.json()
	if(res.error){
		setLoginError(res.error)
	}else if(res.token){
		localStorage.setItem("token",res.token)
		setUpdateRoute(2)
		redirectHome(true)
	}
}

    return (
        <div>
			<div className="flex center tc w-100 container" style={{flexDirection:'column'}}>
			<a href="/"><img src="" alt="" />Logo</a>
			<div className="section-header">
                   <figure className="sec-h">Welcome to Coinrector</figure>
                </div>
			</div>
			<div className="red tc f6">
				<span>{loginError}</span>
			</div>
           <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"><a href="/register">Sign up</a></label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user" placeholder="email" type="text" class="input" value={LoginEmail} onChange={e=>setLoginEmail(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" placeholder="password" type="password" class="input" data-type="password" value={Loginpass} onChange={e=>setLoginPass(e.target.value)}/>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked/>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In" onClick={LoginToAct}/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk flex">
					<a href="/forgot-password">Forgot Password?</a>&nbsp;&nbsp;<em className="white">/</em>&nbsp;&nbsp;
					<a href="/" className="white hover-yellow">back home</a>
				</div>
			</div>
		</div>
	</div>
</div>
            </div>
    )
}
export default Login