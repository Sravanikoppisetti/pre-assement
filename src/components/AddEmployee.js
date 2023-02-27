import React from 'react'

export default function AddEmployee({handleAddSubmit, handleCancelBtn}) {
  return (
    <>
    <h3>ADD FORM:</h3>
    <form onSubmit={handleAddSubmit}>
        Name <input type='text' name='name' />
        Role <input type='text' name='role' />
        Gender<input type='text' name='gender' />
        <button type='submit'>ADD</button>
        <button onClick={handleCancelBtn}>Cancel</button>

    </form>
    </>
  )
}
