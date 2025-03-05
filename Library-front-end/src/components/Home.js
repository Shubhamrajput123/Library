import React, { useState, useEffect } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [book, setBook] = useState({ name: "", title: "" });  // ✅ For adding books
  const [books, setBooks] = useState([]);  // ✅ Initialize as an empty array

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books/getAllBook");
      
      console.log("API Response:", response.data);  // ✅ Debugging

      if (Array.isArray(response.data)) {
        setBooks(response.data);  // ✅ Ensure we store an array
      } else {
        setBooks([]);  // ✅ Prevent errors
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);  // ✅ Ensure it's always an array
    }
  };

  useEffect(() => {
    fetchBooks();  // ✅ Load books on mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/books/postBook", book, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Book Added:", response.data); // Debugging
      alert("Book added successfully!");
      setBook({ name: "", title: "" }); // Reset form
  
      await fetchBooks(); 
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book");
    }
  };

  

  return (
    <Container className="mt-5">
      <h2>Add a Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{b.name}</td>
              <td>{b.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};




export default Home;