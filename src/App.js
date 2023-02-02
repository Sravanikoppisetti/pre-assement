
import React, { useState } from 'react';
import logo from './img.png';
import './App.css';
import Table from "./components/data.js";


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div class="container">
      <div class="navbar" >
      <nav  class="nav">
        <img src={logo} alt="Logo" className="logo" />
        <button className="create-button" onClick={handleModalOpen}>
          Create
        </button>
      </nav>
      </div>
      <div class="displaytable">
      
      <Table />
      </div>
    
    </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Role" />
              <div>
                Gender
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <button>submit</button>
              </div>
            </form>
          </div>
        </div>
        
      )}
    </>
    
  );
};

export default Navbar;


// App.js

// import React from "react";
// import Navbar from "./Navbar";
// import Table from "./Table";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="container">
//       <Navbar />
//       <Table />
//     </div>
//   );
// };

// export default App;
