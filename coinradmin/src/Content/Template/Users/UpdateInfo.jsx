import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
const UpdateINfo = ({id,name})=> {
    const [show, setShow] = useState(false);
    const [error,setError] = useState('')
    const [msg,setMsg] = useState('')
    const [profit,setProfit] = useState('')
    const [bonus,setBonus] = useState('')
    const [deposit,setDeposit] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const UpdateUserData = async()=>{
    const UpdateData = await fetch(`http://localhost:4000/UpdateUser/${id}`,{
      method:'PATCH',
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({profit:profit,bonus:bonus,deposit:deposit})
    })
    const res = await UpdateData.json()
    if(res.data){
      setMsg(res.data)
      setError('')
      setProfit('')
      setBonus('')
      setDeposit('')
    }else{
      setError(res.error)
      setMsg('')
    }
  }
  
    return (
      <>
        <button class="btn btn-primary" onClick={handleShow}>
         Update
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update {name} user details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="db">
          <span className="red tl f5 fw5">{error}</span>
          <span className="red tl f5 fw5">{msg}</span>
          </div>
            <label htmlFor="pass">profit</label>
              <input id="pass" type="text" className="form-control" value={profit} placeholder="Enter Profit" onChange={e=>setProfit(e.target.value)}/>
              <label htmlFor="pass">Bonus</label>
              <input id="pass" type="text" className="form-control" value={bonus} placeholder="Enter bonus" onChange={e=>setBonus(e.target.value)}/>
              <label htmlFor="pass">Deposit</label>
              <input id="pass" type="text" className="form-control" value={deposit} placeholder="Enter Deposit" onChange={e=>setDeposit(e.target.value)}/>
              
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-primary" onClick={UpdateUserData}>
              save
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default UpdateINfo