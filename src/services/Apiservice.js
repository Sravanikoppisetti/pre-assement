import axios from 'axios';

export  function getEmployee(){
    return axios.get("http://127.0.0.1:8000/employee/")
    .then(res=>{console.log("res",res.data)
      return res.data
    })
}

export  function addEmployee(Employee){
  return axios.post("http://127.0.0.1:8000/employee/",
  {
    Employee_id: null,
    Name :Employee.name.value,
    Role:Employee.role.value,
    Gender: Employee.gender.value,
  })
  .then(res=>{
    return res.data
  })
}




export  function editEmployee(id, Employee) {
  return axios.put('http://127.0.0.1:8000/employee/'+id+'/',
  {
      Name: Employee.name.value,
      Role: Employee.role.value,
      Gender: Employee.gender.value,
  })
  .then(res => {
      return res.data
  })}


export  function deleteEmployee(id) {
  return axios.delete('http://127.0.0.1:8000/employee/'+id+'/')
  .then(res => {
      return res.data
  })}