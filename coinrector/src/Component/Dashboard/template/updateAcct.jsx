import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'antd';

const UpdateInfo = ()=> {
    const [show, setShow] = useState(false);
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
    const [Phone,setPhone] = useState('')
    const [error,setError] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const UpdateAcct = async()=>{
        const setData = await fetch('http://localhost:4000/UpdateUserInfo',{
            method:'PATCH',
            headers:{"content-Type":"application/json",token:localStorage.token},
            body:JSON.stringify({
                firstname:Firstname,lastname:Lastname,phone:Phone,
            })
        })

        const res = await setData.json()
        //Display success message
    }
  
    return (
      <>
        <Button type="primary" onClick={handleShow}>
         Updateinfo
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update your info.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label htmlFor="pass">Firstname</label>
              <input id="pass" type="text" className="form-control" onChange={e=>setFirstname(e.target.value)} placeholder="Enter firstname"/>
            <hr />
            <label htmlFor="pass">Lastname</label>
              <input id="pass" type="text" className="form-control" onChange={e=>setLastname(e.target.value)} placeholder="Enter lastname"/>
            <hr />
            <label htmlFor="pass">Phone</label>
              <input id="pass" type="text" className="form-control" onChange={e=>setPhone(e.target.value)} placeholder="Enter phone"/>
            <hr /> <span className="red tl f5 fw5">{error}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button type="secondary" onClick={UpdateAcct}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default UpdateInfo