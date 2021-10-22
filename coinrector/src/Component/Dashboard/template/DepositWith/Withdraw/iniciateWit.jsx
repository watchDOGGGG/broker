import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'antd';
const Withdraw = ()=> {
    const [show, setShow] = useState(false);
    const [amount,setAmount] = useState('')
    const [error,setError] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendLink = (amount)=>{
        if (amount != '') {
            window.location = `/payment/withdraw/${amount}`
        }else{
            setError('please enter amount')
        }
        
    }
  
    return (
      <>
        <Button type="primary" onClick={handleShow}>
         cashout
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Make a cashout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type="text" className="form-control" placeholder="Enter Amount here" onChange={e=>setAmount(e.target.value)}/>
          <span className="red tl f5 fw5">{error}</span>
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
  
 export default Withdraw