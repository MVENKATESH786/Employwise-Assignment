import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api";
import UserCard from "./UserCard";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers(page);
      setUsers(response.data.data);
    };
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
