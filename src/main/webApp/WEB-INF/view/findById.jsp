<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.book.books.entity.Books" %>
<!DOCTYPE html>
<html>
<head>
    <title>Find Book by ID</title>
</head>
<body>

    <h2>Find Book by ID</h2>

    <form action="findById" method="get">
        <label for="bookId">Enter Book ID:</label>
        <input type="number" id="bookId" name="bookId" required>
        <br><br>
        <button type="submit">Search</button>
    </form>

    <br>

    <% 
        Books book = (Books) request.getAttribute("book"); 
        if (book != null) { 
    %>
        <h3>Book Details:</h3>
        <p><strong>ID:</strong> <%= book.getId() %></p>
        <p><strong>Name:</strong> <%= book.getName() %></p>
        <p><strong>Title:</strong> <%= book.getTitle() %></p>
    <% } else if (request.getAttribute("error") != null) { %>
        <p style="color: red;"><%= request.getAttribute("error") %></p>
    <% } %>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>
