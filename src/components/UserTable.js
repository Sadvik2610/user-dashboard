import React from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users, onSort }) => {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("name")}>Name ⬍</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => onSort("company")}>Company ⬍</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;