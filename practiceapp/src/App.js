import React, { useEffect, useState } from "react";
import InputData from "./InputData";
import Table from "./pages/Table";
import { getUsers } from "./utils/api";


function App() {
  const [employee, newEmployee] = useState([]);
  const [usersInput, newUsersInput] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => newEmployee(results));
  }, []);

  return (
    <div>
      <h1>Employee Directory</h1>
      <p>
        Search By Name
      </p>
      <InputData users={employee} newUsers={newUsersInput} />
      <Table users={usersInput} />
    </div>
  );
}

export default App;

