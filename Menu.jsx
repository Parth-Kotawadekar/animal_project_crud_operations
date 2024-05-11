// import React from 'react'
// import { Link } from 'react-router-dom'
// import Cell_Master from './Cell_Master'

// const Menu = () => {
//   return (
//     <>
        
//         <h1>Menu Buttons</h1>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <button className='btn btn-warning text-dark'> <a href='/cell'>Cell Master</a> </button> &nbsp;&nbsp;&nbsp;
//         <button className='btn btn-warning text-dark'> <Link to='/Employee' >Employee Details</Link> </button>&nbsp;&nbsp;&nbsp;

//         <button className='btn btn-warning'><Link to='/Checkpoint'>Checkpoint Details</Link></button> 
//     </>
//   )
// }

// export default Menu

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <h1>Menu Buttons</h1>
      <Link to="/employee" className="btn btn-warning mr-2" style={{backgroundColor:'#353755', color:"#E0E4EE", textAlign:'center' }}>Animal Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

export default Menu;
