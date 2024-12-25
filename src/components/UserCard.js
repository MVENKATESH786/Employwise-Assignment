import React from "react";

export default function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <p>
        {user.first_name} {user.last_name}
      </p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}
