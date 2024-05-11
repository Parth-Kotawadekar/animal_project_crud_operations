import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import Service from '../Service/Service';
import { useEffect } from 'react';

const EditEmployee = () => {
  const [animal, setAnimal] = useState({
    id : "",
    name :"",
          category : "",
          image:"",
          description:"",
          life_expectancy:"",
          captcha:"",
  });

  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    Service
    .getEmployeeById(id)
    .then((res)=>{
      setAnimal(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }, [id])

  //handleChange is used to gett all cell data
  const handleChange = (e) => {
    const value = e.target.value;
    setAnimal({ ...animal,[e.target.name]: value});

    const file = e.target.files[0]; // Get the first file selected by the user
    const reader = new FileReader(); // Create a FileReader object

    // Define a callback function to be executed when the file is read
    reader.onloadend = () => {
        // Update the state with the base64 representation of the image
        setAnimal({ ...animal, image: reader.result });
    };

    // Read the file as a data URL (base64 format)
    if (file) {
        reader.readAsDataURL(file);
    }
  };

  //When to add new entry in cell it is call in form tag
  const EmployeUpdate = (e) => {
    e.preventDefault();
    console.log(animal);

    Service.editEmployee(animal)
    .then((res)=>{
      navigate("/Employee")
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
            <div className='card-header fs-3 text-center'>
              <h2>Edit Employee</h2>
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => EmployeUpdate(e)}>
                <div className='mb-3'>
                  <label>Name of Animal:</label>
                  <input 
                        type="text" 
                        name="name" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.name}
                  />
                  <label>Category:</label>
                  <input 
                        type="text" 
                        name="category" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.category}
                  />
                  <label>Image:</label>
                  <input 
                        type="file" 
                        name="image" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.image}
                  />
                  <label>Description:</label>
                  <input 
                        type="text" 
                        name="description" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.description}
                  />
                  <label>Life Expectancy:</label>
                  <input 
                        type="text" 
                        name="life_expectancy" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.life_expectancy}
                  />
                  <label>Life Expectancy:</label>
                  <input 
                        type="text" 
                        name="captcha" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.captcha}
                  />

                  <button className='btn btn-primary col-md-12 mt-3'>Submit</button>
                  <input type="button" value="Reset"></input>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditEmployee