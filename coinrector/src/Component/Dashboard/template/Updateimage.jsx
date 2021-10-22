import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button} from 'antd';
import Upload from './upload'
const UpdateInfo = ()=> {
    const [show, setShow] = useState(false);
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
    const [Phone,setPhone] = useState('')
    const [DOB,setDOB] = useState('')
    const [Address,setAddress] = useState('')
    const [error,setError] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const UpdateAcct = async()=>{
        const setData = await fetch('http://localhost:4000/UpdateUserInfo',{
            method:'PATCH',
            headers:{"content-Type":"application/json",token:localStorage.token},
            body:JSON.stringify({
                firstname:Firstname,lastname:Lastname,phone:Phone,address:Address,Dob:DOB
            })
        })

        const res = await setData.json()
        //Display success message
    }
  
    return (
      <>
        <Button type="primary" onClick={handleShow}>
         Update image
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update your info.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Upload from={'profile'} title={'upload image'}/>
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