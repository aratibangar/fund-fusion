import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Form, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Donate() {
  const API_URL = "http://localhost:3000/api";

  const [donations, setDonations] = useState([]);
  const [form, setForm] = useState({
    donor_name: "",
    amount: "",
    project_id: "",
    user_id: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  function fetchDonations() {
    axios
      .get(`${API_URL}/donations`)
      .then((res) => setDonations(res.data.donations))
      .catch((err) => {
        console.error("Fetch Error:", err);
        toast.error("Failed to load donations.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { donor_name, amount, project_id, user_id } = form;

    if (!donor_name || !amount || !project_id || !user_id) {
      toast.error("All fields are required.");
      return;
    }

    const request = editId
      ? axios.put(`${API_URL}/donation/${editId}`, form)
      : axios.post(`${API_URL}/donate`, form);

    request
      .then(() => {
        toast.success(editId ? "Donation updated successfully." : "Donation added successfully.");
        resetForm();
        fetchDonations();
      })
      .catch((err) => {
        console.error("Submit Error:", err);
        toast.error(editId ? "Error updating donation." : "Error adding donation.");
      });
  }

  function handleEdit(donation) {
    setForm({
      donor_name: donation.donor_name,
      amount: donation.amount,
      project_id: donation.project_id,
      user_id: donation.user_id,
    });
    setEditId(donation.id);
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this donation?")) {
      axios
        .delete(`${API_URL}/donation/${id}`)
        .then(() => {
          toast.success("Donation deleted successfully.");
          fetchDonations();
        })
        .catch((err) => {
          console.error("Delete Error:", err);
          toast.error("Error deleting donation.");
        });
    }
  }

  function resetForm() {
    setForm({ donor_name: "", amount: "", project_id: "", user_id: "" });
    setEditId(null);
  }

  return (
    <div className="container mt-4">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2>{editId ? "Edit Donation" : "Add Donation"}</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md={6} className="mb-3">
            <Form.Label>Donor Name</Form.Label>
            <Form.Control
              type="text"
              name="donor_name"
              placeholder="Donor Name"
              value={form.donor_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md={6} className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={6} className="mb-3">
            <Form.Label>Project ID</Form.Label>
            <Form.Control
              type="number"
              name="project_id"
              placeholder="Project ID"
              value={form.project_id}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md={6} className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="number"
              name="user_id"
              placeholder="User ID"
              value={form.user_id}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          {editId ? "Update Donation" : "Add Donation"}
        </Button>
      </Form>

      <h3 className="mt-5">All Donations</h3>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Donor</th>
            <th>Amount</th>
            <th>Project ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((don) => (
            <tr key={don.id}>
              <td>{don.id}</td>
              <td>{don.donor_name}</td>
              <td>{don.amount}</td>
              <td>{don.project_id}</td>
              <td>
                {don.first_name} {don.last_name}
              </td>
              <td>{new Date(don.donation_date).toLocaleString()}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(don)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(don.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Donate;
