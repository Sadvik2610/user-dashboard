import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  const handleSearch = (query) => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(result);
  };

  const handleSort = (field) => {
    const sorted = [...filteredUsers].sort((a, b) => {
      let valA = field === "company" ? a.company.name : a[field];
      let valB = field === "company" ? b.company.name : b[field];

      return asc
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    setFilteredUsers(sorted);
    setAsc(!asc);
  };

  if (!users.length) {
    return <p style={{ textAlign: "center" }}>Loading users...</p>;
  }

  return (
    <div className="container">
      <h1>User Directory</h1>
      <SearchBar onSearch={handleSearch} />
      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <UserTable users={filteredUsers} onSort={handleSort} />
      )}
    </div>
  );
};

export default Dashboard;