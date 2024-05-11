import React, { useState } from 'react'
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Employee = () => {

  const [animal, setAnimal] = useState([]);

  useEffect(() => {
        init();
  },[]);

  const init = () => {
        Service
        .getAllEmployee()
        .then((res)=>{
                setAnimal(res.data);
                init();
        }).catch((error)=>{
                console.log(error);
        })
  }

  const deleteEmployee = (id) => {
        Service
        .deleteEmployee(id)
        .then((res)=>{
                console.log("Employee Deleted Successfully");
                setAnimal(res.data);
        }).catch((error)=>{
                console.log(error);
        })
  }

  return (
    <>
        <div className='container'>
                <div className='row'>
                        <div className='col-md-12'>
                                <div className='card'>
                                <h1>
                                        <div className='card header fs-1 mt-5 text-center'>Employee Details</div></h1>
                                        <div className='card-body'>
                                                <Link to="/addEmployee" className='btn mb-3 btn-primary'>Add New</Link>
                                                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Department</th>
                    <th scope="col">&nbsp;&nbsp;&nbsp;Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                        animal.map((emp, num) => (
                    <tr>                  
                      <td>{num+1}</td>
                      <td>{emp.name}</td>
                      <td>{emp.category}</td>
                      <td>{emp.image}</td>
                      <td>{emp.life_expectancy}</td>
                      <td>{emp.captcha}</td>
                      <td>
                        <Link to={'/editEmployee/' + emp.id} className='btn btn-sm btn-primary'>Edit</Link>
                        <button onClick={() => deleteEmployee(emp.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
    </>
  )
}

export default Employee