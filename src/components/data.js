
import React, { useState } from "react";
import './data.css';

const Table = () => {
  const data = [
    { name: "John Doe", role: "Developer", gender: "Male" },
    { name: "Jane Doe", role: "Designer", gender: "Female" },
    { name: "Jim Smith", role: "Manager", gender: "Male" }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (genderFilter === "" || item.gender === genderFilter)
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select
        value={genderFilter}
        onChange={e => setGenderFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.gender}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
