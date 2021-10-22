import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'antd';
// bitcoin
const btc_start = {
  amount: 0.001,
  typ: 'btc',
  plan_name : "starter level"
}
const btc_vip = {
  amount: 0.01,
  typ: 'btc',
  plan_name : "vip level"
}
const btc_boss = {
  amount:0.1,
  typ: 'btc',
  plan_name : "boss level"
}
// ethereum
const eth_start = {
  amount: 0.014,
  typ: 'eth',
  plan_name : "starter level"
}
const eth_vip = {
  amount: 0.14,
  typ: 'eth',
  plan_name : "vip level"
}
const eth_boss = {
  amount:1.45,
  typ: 'eth',
  plan_name : "boss level"
}
// litcoin
const ltc_start = {
  amount: 0.22,
  typ: 'ltc',
  plan_name : "starter level"
}
const ltc_vip = {
  amount: 2.17,
  typ: 'ltc',
  plan_name : "vip level"
}
const ltc_boss = {
  amount:21.71,
  typ: 'ltc',
  plan_name : "boss level"
}

const NDeposit = ()=> {
    const [show, setShow] = useState(false);
    const [amount,setAmount] = useState('')
    const [error,setError] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendLink = async(amount)=>{
        if (amount != '') {
          window.location = `/payment/deposit/${amount}`
        }else{
            setError('please enter amount')
        }
        
    }
  
    return (
      <>
        <Button type="primary" onClick={handleShow}>
         +New Deposit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Make new deposit</Modal.Title>
          </Modal.Header> */}
          <Modal.Body><span className="red tl f5 fw5">{error}</span>
          <div className="mt1 pa1">
            <div>Bitcoin plan</div>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href={`/payment/deposit/${btc_start.amount}/${btc_start.plan_name}/${btc_start.typ}`}>Starter level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${btc_vip.amount}/${btc_vip.plan_name}/${btc_vip.typ}`}>Vip level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${btc_boss.amount}/${btc_boss.plan_name}/${btc_boss.typ}`}>Boss level</a>
          </div>
          <div className="mt1 pa1">
            <div>Ethereum plan</div>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href={`/payment/deposit/${eth_start.amount}/${eth_start.plan_name}/${eth_start.typ}`}>Starter level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${eth_vip.amount}/${eth_vip.plan_name}/${eth_vip.typ}`}>Vip level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${eth_boss.amount}/${eth_boss.plan_name}/${eth_boss.typ}`}>Boss level</a>
          </div>
          <div className="mt1 pa1">
            <div>Litcoin plan</div>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href={`/payment/deposit/${ltc_start.amount}/${ltc_start.plan_name}/${ltc_start.typ}`}>Starter level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${ltc_vip.amount}/${ltc_vip.plan_name}/${ltc_vip.typ}`}>Vip level</a>
          <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ml1" href={`/payment/deposit/${ltc_boss.amount}/${ltc_boss.plan_name}/${ltc_boss.typ}`}>Boss level</a>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="secondary" onClick={e=>sendLink(amount)}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default NDeposit