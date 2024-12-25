import React, { useState } from "react";
import { updateUser } from "../api";

export default function EditUser({ user, onClose }) {
  const [formData, setFormData] = useState(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user.id, formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.first_name}
        onChange={(e) =>
          setFormData({ ...formData, first_name: e.target.value })
        }
      />
      <input
        value={formData.last_name}
        onChange={(e) =>
          setFormData({ ...formData, last_name: e.target.value })
        }
      />
      <button type="submit">Save</button>
    </form>
  );
}
