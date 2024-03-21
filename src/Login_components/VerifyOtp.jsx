import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../Routes/Axios';
import ApiRoutes from '../Routes/ApiRoutes';
import { Container } from 'react-bootstrap';

function VerifyOtp() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.VERIFY_CODE.path}`,
        formProps,
        {
          authenticate: ApiRoutes.VERIFY_CODE.authenticate,
        }
      );
     
      if (res.status === 200) 
      {
       
      navigate('/reset-password')
      }   
          
    } catch (error) {
      // toast.error(error.response.data.message || error.message);
      console.log(error);
    }
  };
  
  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-25 border-4 rounded-2 bg-gray shadow-lg mt-5'>
     
    <h4 className='text-center text-decoration-underline text-bg-light my-2'>OTP Verification</h4>
    <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>OTP</Form.Label>
            <Form.Control type="number" placeholder="Enter otp" name="code" />
            <Form.Text className="text-muted">
              We'll never share your otp with anyone else.
            </Form.Text>
          </Form.Group>
    
         
          <Button variant="primary" className='w-75 mx-4' type="submit">
            Submit
          </Button>
        </Form>
        </Container>
  )
}

export default VerifyOtp