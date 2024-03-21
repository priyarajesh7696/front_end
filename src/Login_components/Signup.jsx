import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../Routes/Axios';
import ApiRoutes from '../Routes/ApiRoutes';
import { Container } from 'react-bootstrap';

function Signup() {
  let navigate = useNavigate()
  const handleSubmit = async(e)=>{
     
    try {
     e.preventDefault()

 
     const formData = new FormData(e.target);
     const formProps = Object.fromEntries(formData); 
   
 
     
     let res = await AxiosService.post(`${ApiRoutes.SIGN_UP.path}`,formProps,{
      authenticate:ApiRoutes.SIGN_UP.authenticate
    })
    alert(`Account created successfully
            login to continue`)
    navigate('/login')
    
    } catch (error) {
      //  toast.error(error.response.data.message || error.message)
      console.log(error)
    }
   }

  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-25 border-4 rounded-2 bg-gray shadow-lg mt-5'>
     
        <h4 className='text-center text-decoration-underline text-bg-light my-2'>Register</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
          <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control type="userName" placeholder="Enter User Name"name='userName'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"name='email'/>
            </Form.Group>
    
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"name='password'/>
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" >
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type='number' placeholder='Mobile'name='mobile'/>
          </Form.Group>
          <Button className='mx-4 w-75' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>

  )
}

export default Signup