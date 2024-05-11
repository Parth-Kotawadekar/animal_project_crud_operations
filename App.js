
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Menu from './component/Menu';
import { Routes, Route } from 'react-router-dom';
import Employee from './component/Employee';
import EditEmployee from './component/EditEmployee';
import AddEmployee from './component/AddEmploye';
const App = () => {
  return (
        <>
          <Navbar />
          
          <Routes>
            <Route path='/menu' element={<Menu/>}></Route>
            {/* Employee Routes */}
            <Route path='/Employee' element={<Employee/>}></Route>
            <Route path='/addEmployee' element={<AddEmployee/>}></Route>
            <Route path='/editEmployee/:id' element={<EditEmployee/>}></Route>
          </Routes>
        </>
  );
}

export default App;
