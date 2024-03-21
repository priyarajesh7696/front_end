import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap'; 
import Logout from '../hooks/Logout';


function NavBar() {
  const useLogout = Logout()
  let [loginUser,setLoginuser] = useState(false)
  const user =sessionStorage.getItem("id")
  if(user=="")
  {
    setLoginuser(true)
  }
   
  return (
    <div className='container-fluid'>
   <Nav className='bg-dark'>
          <Nav.Item className='mx-5 me-5'>
            <Nav.Link href="/dashboard"><h3>Reset Password</h3></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav.Item>
        
        {
          loginUser?<Nav.Item>
          !  Welcome user !
           </Nav.Item>:""
        }  
          <Nav.Item className='start-100 mx-auto me-5'>
            <Nav.Link onClick={useLogout}>Logout</Nav.Link>
          </Nav.Item>
          {/* <Button  variant="danger" onClick={useLogout} >Logout</Button> */}
        </Nav>
        
    
        </div>
  )
}

export default NavBar