import React, { useEffect, useState } from "react";

const InputData = ({ users, newUsers }) => {
  const [inputValue, newInputValue] = useState("");

  useEffect(() => {
    const usersData =
      inputValue === ""
        ? users
        : users.filter(
          ({ name: { first } }) =>
            first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        );

    newUsers(usersData);
  }, [inputValue, users]);

  return (
    <input value={inputValue} onChange={e => newInputValue(e.target.value)} />
  );
};

export default InputData;
