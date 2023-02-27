import React from 'react'

export default function EditEmployee({handleEditSubmit, selectedEditData}) {
  return (
    <>
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e)=>handleEditSubmit(e,selectedEditData.Employee_id)}>
        Name <input type='text' name='name' defaultValue={selectedEditData.name}/>
        Role <input type='text' name='role' defaultValue={selectedEditData.role} />
        Gender<input type='text' name='gender' defaultValue={selectedEditData.gender} />

        
        <button type='submit'>EDIT</button>
    </form>
    </>
  )
}