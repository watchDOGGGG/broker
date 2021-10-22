import React,{useState} from 'react'

const BankForm = () =>{
    const [error,setError] = React.useState('')
    
    const [Bank,setbank] = useState('')
    const [AcctNum,setAcctnum] = useState('')
    const [AcctName,setAcctname] = useState('')
    const [bitcoin,setbtc] = useState('')
    const [Ethereum,setether] = useState('')
    const [Litcoin,setLitcoin] = useState('')

const UpdateBank = async()=>{
    const SendData = await fetch(`http://localhost:4000/InsertBank`,{
        method:'POST',
        headers:{"content-Type":"application/json",token:localStorage.token},
        body:JSON.stringify({
            bankName:Bank,AcctNum:AcctNum,AcctName:AcctName,btc:bitcoin,eth:Ethereum,ltc:Litcoin
        })
    })
    const res = await SendData.json()
    //Display message to user
}
    return(
        <div>
            <div class="row mb-4">
						<div class="col card p-3 shadow-lg bg-light">
							<div class="accordion accordion-dark ">
								<div>
								{/* <!--............................... collapse one --> */}
								{/* <div class="card">
									<div class="card-header bg-blue" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										<div class="span-icon">
											<div class="fa fa-clone"></div>
										</div>
										<div class="span-title text-dark">
											Bank transfer
										</div>
										<div class="span-mode"></div>
									</div>
									<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
										<div class="card-body bg-light shadow">
											<div class="form-group">
												<h5 class="text-dark">Bank Name</h5>
												<input onChange={e=>setbank(e.target.value)} type="text" name="bank_name" value={Bank} class="form-control text-dark bg-light" placeholder="Enter bank name"/>
											</div>
											<div class="form-group">
												<h5 class="text-dark">Account Name</h5>
												<input onChange={e=>setAcctname(e.target.value)} type="text" name="account_name" value={AcctName} class="form-control  text-dark bg-light" placeholder="Enter Account name"/>
											</div>
											<div class="form-group">
												<h5 class="text-dark">Account Number</h5>
												<input onChange={e=>setAcctnum(e.target.value)} type="text" name="account_no" value={AcctNum} class="form-control text-dark bg-light" placeholder="Enter Account Number"/>
											</div>
										</div>
									</div>
								</div> */}
									{/* <!--............................... collapse two --> */}
								<div class="card">
									<div class="card-header bg-blue" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
										<div class="span-icon">
											<div class="fa fa-clone"></div>
										</div>
										<div class="span-title text-dark">
											BItcoin
										</div>
										<div class="span-mode"></div>
									</div>
									<div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
										<div class="card-body bg-light shadow">
											<div class="form-group">
												<h5 class="text-dark">BTC ADDRESS</h5>
												<input onChange={e=>setbtc(e.target.value)} type="text" name="btc_address" value={bitcoin} class="form-control text-dark bg-light" placeholder="Enter Bitcoin Address"/>
											</div>
										</div>
									</div>
								</div>
						{/* <!--............................... collapse three --> */}
								<div class="card">
									<div class="card-header bg-light" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
										<div class="span-icon">
											<div class="fa fa-clone"></div>
										</div>
										<div class="span-title text-dark">
										Ethereum
										</div>
										<div class="span-mode"></div>
									</div>
									<div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
										<div class="card-body bg-light shadow">
											<div class="form-group">
												<h5 class="text-dark">ETH ADDRESS</h5>
												<input onChange={e=>setether(e.target.value)} type="text" name="eth_address" value={Ethereum} class="form-control text-dark bg-light" placeholder="Enter Etherium Address"/>
											</div>
										</div>
									</div>
								</div>
								{/* <!--............................... collapse four --> */}
								<div class="card">
									<div class="card-header bg-blue" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
										<div class="span-icon">
											<div class="fa fa-clone"></div>
										</div>
										<div class="span-title text-dark">
											Litcoin
										</div>
										<div class="span-mode"></div>
									</div>
									<div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordion">
										<div class="card-body bg-light shadow">
											<div class="form-group">
												<h5 class="text-dark bg-light">LTC ADDRESS</h5>
												<input onChange={e=>setLitcoin(e.target.value)} type="text" name="ltc_address" value={Litcoin} class="form-control text-dark bg-light" placeholder="Enter Litcoin Address"/>
											</div>
										</div>
									</div>
								</div>
								{/* <!--......................... end of collaps four --> */}
								<input type="submit" class="btn btn-primary" value="Submit" onClick={UpdateBank}/>  &nbsp; &nbsp; 
								<a href="https://coinrector.com/dashboard/skip_account" style={{color:"red"}}>Skip</a>
								<input type="hidden" name="id" value="164"/>
								<input type="hidden" name="_token" value="HynqWhRFG3gwtfdZJM0WxuH1V5R8aQkMIErEFt4Y"/>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}
export default BankForm