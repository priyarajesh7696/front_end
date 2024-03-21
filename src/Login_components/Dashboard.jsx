import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import AxiosService from '../Routes/Axios'
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import Table from 'react-bootstrap/Table';
import ApiRoutes from '../Routes/ApiRoutes';
import {Container} from 'react-bootstrap';


function Dashboard() {
    let [users,setUsers] = useState([])
  
    let getData = async()=>{
        try {
          let res = await AxiosService.get(`${ApiRoutes.GET_USERS.path}`,{
            authenticate:ApiRoutes.GET_USERS.authenticate
          })
          console.log(res)
          if(res.status===200)
          {
            // toast.success(res.data.message)
            setUsers(res.data.user)
          }
        } catch (error) {
          // toast.error(error.response.data.message || error.message)
         console.log(error)
            // logout()
        }
      }
    
      useEffect(()=>{
        getData()
      },[])
    

    
  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 border-4 rounded-2 bg-gray shadow-lg mt-3'>
     
    <h4 className='text-center text-decoration-underline text-bg-light my-2'>User Details</h4>
    <div className='container-fluid'>
       
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((e,i)=>{
                return <tr key={e._id}>
                  <td>{i+1}</td>
                  <td>{e.userName}</td>
                  <td>{e.email}</td>
                  <td>*******</td>
                  <td>{e.mobile}</td>
                  <td>{e.createdAt}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
    
        </div>
        </Container>
  )
}

export default Dashboard