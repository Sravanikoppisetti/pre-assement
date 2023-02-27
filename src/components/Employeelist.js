// import React, { useEffect, useState } from "react";
// import { getEmployeer, addEmployee, editEmployee, DeleteEmployee } from "../services/Apiservice";
// import './data.css';
// // import './App.css';
// import logo from './img.png';


// import AddEmployee from './AddEmployee'
// import EditEmployee from './EditEmployee'
// export default function Employeelist(){
// const [Employee, setEmployee]=useState([])

// const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false)
// const [showEditEmployeeForm, setShowEditEmployeeForm] = useState(false)
// const [selectedEditData, setSelectedEditData] = useState()

// useEffect(()=>{
//   let mount=true
//   getEmployeer()
//       .then(res => {console.log("res from api",res)
//           setEmployee(res)
//           return ()=>mount=false
//        })   
// }, [])

// const handleAddSubmit = (e) => {
//   AddEmployee(e.target)
//   .then(res => {
//     setEmployee(res)
//   }) 
//   }

// const handleEditBtn = (Employee) => {
//     setSelectedEditData(Employee)
//     console.log(" selected Employee", Employee)
//     setShowEditEmployeeForm(true)
//     setShowAddEmployeeForm(false)
// }

// const handleEditSubmit = (e, id) => {
//     editEmployee(id, e.target)
//     .then(res => {
//         setEmployee(res)
//     })
// }

// function handleCancelBtn() {
//     setShowAddEmployeeForm(false)
// }


// const handleDeleteBtn = (id) => {
//     DeleteEmployee(id)
//     .then(res => {
//         setEmployee(Employee.filter(p=> p.Employee_id !== id))
//     })
// }




//     return(
//         <>
//         <h3>Employee list</h3>
        
//         <table>
//             <thead>
//                 <tr>
                    
                   
//                     <th>Name</th>
//                     <th>Role</th>
//                     <th>Gender</th>
//                     <th>Edit</th>
//                     <th>Delete</th>
//                 </tr>
//             </thead>
//         <tbody>

//           {Employee.map(item => {
//             return <tr key={item.Employee_id}>
//               <td>{item.name}</td>
//               <td>{item.role}</td>
//               <td>{item.gender}</td>
//               <td>
//                 <button onClick={()=>handleEditBtn(Employee)}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={()=>handleDeleteBtn(Employee.Employee_id)}>Delete</button>
//               </td>
//             </tr>
// })}
//         </tbody>
//       </table>
//       <button onClick={()=>setShowAddEmployeeForm(true)}>Add New Employee</button>
//     {showAddEmployeeForm && <AddEmployee handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}
//     {showEditEmployeeForm && <EditEmployee handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
    
   
    
//   </>
//     )
// }

import React, { useEffect, useState } from 'react'
import { getEmployee, addEmployee, editEmployee , deleteEmployee} from "../services/Apiservice";
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'

export default function EmployeeList() {

const [Employees, setEmployees] = useState([])
const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false)
const [showEditEmployeeForm, setShowEditEmployeeForm] = useState(false)
const [selectedEditData, setSelectedEditData] = useState()

useEffect(() => {
    let mount = true
    getEmployee()
    .then(res => {console.log("res from api", res)
        setEmployees(res)
        return() => mount = false
    })
}, [])

const handleAddSubmit = (e) => {
    addEmployee(e.target)
    .then(res => {
        setEmployees(res)
    })
}

const handleEditBtn = (Employee) => {
    setSelectedEditData(Employee)
    console.log("Employee selected is", Employee)
    setShowEditEmployeeForm(true)
    setShowAddEmployeeForm(false)
}

const handleEditSubmit = (e, id) => {
    editEmployee(id, e.target)
    .then(res => {
        setEmployees(res)
    })
}
function handleCancelBtn() {
    setShowAddEmployeeForm(false)
}
const handleDeleteBtn = (id) => {
    deleteEmployee(id)
    .then(res => {
        setEmployees(Employees.filter(p=> p.Employee_id !== id))
    })
}

  return (
    <>
    <h3>Employee LIST</h3>
    <table border={"2px"} cellPadding={"10px"}>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Blood Group</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {Employees.map(Employee => {
                return <tr key={Employee.Employee_id}>
                <td>{Employee.name}</td>
                <td>{Employee.role}</td>
                <td>{Employee.gender}</td>
                <td><button onClick={()=>handleEditBtn(Employee)}>Edit</button> <button onClick={()=>handleDeleteBtn(Employee.Employee_id)}>Delete</button></td>
            </tr>
            })}
            
        </tbody>
    </table>
    <button onClick={()=>setShowAddEmployeeForm(true)}>Add New Employee</button>
    {showAddEmployeeForm && <AddEmployee handleAddSubmit={handleAddSubmit} handleCancelBtn = {handleCancelBtn}/>}
    {showEditEmployeeForm && <EditEmployee handleEditSubmit={handleEditSubmit} selectedEditData = {selectedEditData}/>}
    </>
  )
}