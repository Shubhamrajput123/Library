import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const FindBook = () => {
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState("");

  const handleFind = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/books/getBook/${bookId}`);
      setBook(response.data);
      setMessage("");
    } catch (error) {
      console.error("Error fetching book:", error.response ? error.response.data : error.message);
      setBook(null);
      setMessage("Book not found.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Find Book by ID</h2>

      {/* Show error message if book is not found */}
      {message && <Alert variant="danger">{message}</Alert>}

      {/* Form to enter Book ID */}
      <Form onSubmit={handleFind}>
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
        <Button variant="primary" type="submit">Find Book</Button>
      </Form>

      {/* Show Book Details after fetching */}
      {book && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{book.title}</Card.Subtitle>
            <Card.Text>Book ID: {book.id}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default FindBook;
