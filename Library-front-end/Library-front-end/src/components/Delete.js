import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Delete = () => {
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/books/delete/${bookId}`);
      setMessage("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error.response ? error.response.data : error.message);
      setMessage("Error deleting book.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Delete Book</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <Form onSubmit={handleDelete}>
        <Form.Group className="mb-3">
          <Form.Label>Book ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book ID"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit">Delete Book</Button>
      </Form>
    </Container>
  );
};

export default Delete;