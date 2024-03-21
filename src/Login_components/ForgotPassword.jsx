import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../Routes/Axios';
import ApiRoutes from '../Routes/ApiRoutes';
import { Container } from 'react-bootstrap';

function ForgotPassword() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.SEND_EMAIL.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SEND_EMAIL.authenticate,
        }
      );
     
      if (res.status === 200) 
      {
       
       alert("Otp Send successfully");
navigate('/verify-otp')
      }
      else{
        alert("please enter valid otp")
      }
    
    } catch (error) {
      // toast.error(error.response.data.message || error.message);
      console.log(error);
      alert(error)
    }
  };
  
  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-2 w-25 border-4 rounded-2 bg-gray shadow-lg mt-3 mb-5'>
     
    <h4 className='text-center text-decoration-underline text-bg-light my-2'>Forgot Password</h4>
    <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">
              Enter Your Registerd Email ID Below ,We will send the 4-Digit OTP code to your Registered email.
            </Form.Text><br></br>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
         
          <Button variant="primary" className='w-75 mx-4' type="submit">
            Submit
          </Button>
        </Form>
        </Container>
  )
}

export default ForgotPassword