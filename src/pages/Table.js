import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [inputValue, newInputValue] = useState([]);

  useEffect(() => newInputValue(users), [users]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>First</th>
            <th>Last</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Age</th>
          </tr>



        </thead>
        <tbody>
          {inputValue.map(
            ({
              picture: { thumbnail },
              phone,
              email,
              name: { first, last, },
              dob: { date, age },
            }) => (
                <tr key={email}>
                  <td><img src={thumbnail} /></td>
                  <th>{first}</th>
                  <td>{last}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{date}</td>
                  <td>{age}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
