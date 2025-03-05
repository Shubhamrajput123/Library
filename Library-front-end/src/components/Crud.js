import React, {useState ,useEffect}from "react";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Crud = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const [books, setBooks] = useState([]);  // ✅ Initialize as an empty array
  
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books/getAllBook");
      if (Array.isArray(response.data)) {
        setBooks(response.data);  // ✅ Only set state if response is an array
      } else {
        setBooks([]);  // ✅ Default to an empty array if response is unexpected
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);  // ✅ Set to empty array to prevent errors
    }
  };
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-lg">
            <h2 className="text-center mb-4">CRUD Dashboard</h2>
            <Row>
              <Col md={6} className="mb-3">
                <Button variant="primary" block onClick={() => navigate("/create")}>Create</Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="success" block onClick={() => navigate("/read")}>Find</Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="warning" block onClick={() => navigate(`/update/${books.id}`)}>Update</Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="danger" block onClick={() => navigate("/delete")}>Delete</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
         <h2>Book List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book.name}</td>
              <td>{book.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Crud;
