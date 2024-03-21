import React from 'react'
import { FormCheck } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AxiosService from '../Routes/Axios'
import ApiRoutes from '../Routes/ApiRoutes';
import {Container} from 'react-bootstrap';
    

function Login() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_IN.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SIGN_IN.authenticate,
        }
      );
     console.log(res)
      if (res.status === 200) 
      {
       
        alert("login successfully");

        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("id", res.data.id);
        navigate('/dashboard')
      }
          
    } catch (error) {
      // toast.error(error.response.data.message || error.message);
      console.log(error);
    }
  };
  
  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-25 border-4 rounded-2 bg-gray shadow-lg mt-5'>
     
    <h4 className='text-center text-decoration-underline text-bg-light my-2'>Login</h4>
    
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          <Button variant="primary" className='mx-4 text-center btn-sm w-75' type="submit">
            Submit
          </Button><br></br>
          <br></br>
          {/* <Link to="/forgot-password" className="nav-link" href="index.html">
            <span>Forgot password</span>
          </Link> */}
          <a href='/forgot-password' className='text-center mx-5'>Forgot password</a>
        
          </Form>
          </Container>
          
      );
    }

export default Login