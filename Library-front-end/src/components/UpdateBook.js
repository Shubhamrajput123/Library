import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const UpdateBook = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/books/update/${bookId}`, {
        name: bookName,
        title: bookTitle,
      });
      setMessage("Book updated successfully!");
    } catch (error) {
      console.error("Error updating book:", error.response ? error.response.data : error.message);
      setMessage("Error updating book.");
    }
  };
  

  return (
    <Container className="mt-5">
      <h2>Update Book</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <Form onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Update Book</Button>
      </Form>
    </Container>
  );
};

export default UpdateBook;
