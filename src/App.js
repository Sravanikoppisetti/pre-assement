
// import './App.css';
// import Table from "./components/data.js";

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [employee, setEmployee] = useState({name: '', role: '', gender: ''});

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8000/api/employee/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(employee)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     handleModalClose();
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };

  // const handleChange = (e) => {
  //   setEmployee({
  //     ...employee,
  //     [e.target.name]: e.target.value
  //   });
  // };

//   return (
//         <>
//         <div class="container">
//           <div class="navbar" >
//           <nav  class="nav">
//             <img src={logo} alt="Logo" className="logo" />
//             <button className="create-button" onClick={handleModalOpen}>
//               Create
//             </button>
//           </nav>
//           </div>
//           <div class="displaytable">
          
//           <Table />
//           </div>
        
//         </div>
//           {isModalOpen && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={handleModalClose}>
//                   &times;
//                 </span>
//                 <form>
//                   <input type="text" placeholder="Name" />
//                   <input type="text" placeholder="Role" />
//                   <div>
//                     Gender
//                     <input type="radio" id="male" name="gender" value="male" />
//                     <label htmlFor="male">Male</label>
//                     <input type="radio" id="female" name="gender" value="female" />
//                     <label htmlFor="female">Female</label>
//                   </div>
//                   <div>
//                     <button>submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
            
//           )}
//         </>
        
//       );
//     };
    
//     export default Navbar;
    
// import './App.css';
import Employeelist from './components/Employeelist';

function App(){
  return (
  
      <div>
        <Employeelist />
      </div>
      
  )
  
    }
    
export default App;