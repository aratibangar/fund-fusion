import React, { useState } from "react";
import axios from "axios";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        "http://localhost:3000/api/user/password/:id", // Replace 1 with actual user ID
        { old_password: oldPassword, new_password: newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Password updated successfully");
    } catch (err) {
      setError("Error: " + err.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Password</h2>
      <form onSubmit={handlePasswordUpdate}>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="form-label">Old Password</label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Update Password</button>
      </form>
    </div>
  );
}

export default UpdatePassword;
