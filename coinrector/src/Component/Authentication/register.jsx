import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const Registration = ({redirectLogin})=>{
	const [registerError,setRegisterError] = useState('')
	const options = useMemo(() => countryList().getData(), [])
  
//For Registration
const [firstname,setFirstname] = useState('')
const [lastname,setLastname] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const [password,setPassword] = useState('')
const [cpassword,setCPassword] = useState('')
const [country,setCountry] = useState('')
const [currency,setCurrency] = useState('')
const changeHandler = value => {
	
    setCountry(value.label)
  }
	// register
const RegisterAct = async() =>{
	
	const setRegister = await fetch('http://localhost:4000/register',{
		method:'POST',
		headers:{"content-Type":"application/json"},
		body:JSON.stringify({
			fname:firstname,lname:lastname,email:email,phone:phone,country:country,password:password,cpass:cpassword,currency:currency
		})
	})	
	const res = await setRegister.json()
	if(res.error){
		setRegisterError(res.error)
	}else if(res.done){
		// Display success message
		setRegisterError('')
        redirectLogin(true)
	}
}
const setCurren = (value)=>{
	setCurrency(value.target.value)
}
    return(
        <div className="w-60 center">
            <div className="flex center tc w-100 container" style={{flexDirection:'column'}}>
			<a href="/"><img src="" alt="" />Logo</a>
			<div className="section-header">
                   <figure className="sec-h">Welcome to Coinrector</figure>
                </div>
			</div>
            <div className="red tc f6">
				<span>{registerError}</span>
			</div>
            <div class="contact-us">
            <div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Firsname</label>
					<input id="user" type="text" class="input" onChange={e=>setFirstname(e.target.value)}/>
				</div>
				<div class="group">
					<label for="user" class="label">Lastname</label>
					<input id="user" type="text" class="input" onChange={e=>setLastname(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password" onChange={e=>setPassword(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" class="input" data-type="password" onChange={e=>setCPassword(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input" onChange={e=>setEmail(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Phone</label>
					<input id="pass" type="text" class="input" onChange={e=>setPhone(e.target.value)}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Country</label>
					<Select options={options} value={country} onChange={changeHandler} />
				</div>
				<div class="group">
					<label for="pass" class="label">Trade currency</label>
					<select onChange={setCurren}>
						<option value="btc">Bitcoin</option>
						<option value="eth">Etherum</option>
						<option value="dge">Deoge</option>
						<option value="ltc">Litcoin</option>
					</select>
				</div>
				<div class="group">
					<input type="submit" class="button btn btn-primary w-20 mt2" value="Sign Up" onClick={RegisterAct}/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1"><a href="/login">Already Member? login  here</a></label>
				</div>
			</div>
</div>
        </div>
    )
}
export default Registration