import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Service/Service';

const AddEmployee = () => {
  
        const [animal, setAnimal] = useState({
                name :"",
                category : "",
                image:"",
                image:"",
                life_expectancy:"",
                captcha : "",
        });

        const navigate = useNavigate();

        const handleChange = (e) => {
                const value = e.target.value;
                setAnimal({ ...animal, [e.target.name]: value});

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

        const EmployeeRegister = (e) => {
                e.preventDefault();
                console.log(animal);

                Service.addEmployee(animal)
                  .then((res)=>{
                        navigate("/Employee");
                        setAnimal({
                          name :"",
                          category : "",
                          image:"",
                          description:"",
                          life_expectancy:"",
                          captcha : "",
                        })
                }).catch((error)=>{
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
              <h2>Add Animal</h2>
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => EmployeeRegister(e)}>
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
                  <select 
                    name="category" 
                    className='form-control' 
                    onChange={(e) => handleChange(e)}
                    value={animal.category}
                    >
                      <option value="category">Mammal</option>
                      <option value="category">Reptile</option>
                      <option value="category">Other</option>
                    </select>

                  <label>Image:</label>
                  <input 
                        type="file" 
                        name="image" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.image}
                  />
                  <label>Description</label>
                  <input 
                        type="text" 
                        name="descri[tion" 
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

                  <label>Captch:</label>
                  <input 
                        type="text" 
                        name="captcha" 
                        className='form-control' 
                        onChange={(e) => handleChange(e)}
                        value={animal.captcha}
                  />
                </div>
                  <button className='btn btn-primary col-md-12 mt-3'>Submit</button>
                  <input type="button" value="Reset" className='btn btn-primary col-md-12 mt-3'></input>
                
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddEmployee