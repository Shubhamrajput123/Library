<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.List" %>
<%@ page import="com.book.books.entity.Books" %>


<!DOCTYPE html>
<html>
<head>
    <title>All Books</title>
</head>
<body>

    <h2>List of Books</h2>

    <table border="1">
        <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Book Title</th>
        </tr>

        <% 
            List<Books> books = (List<Books>) request.getAttribute("bookList");
            if (books != null && !books.isEmpty()) {
                for (Books book : books) { 
        %>
        <tr>
            <td><%= book.getId() %></td>
            <td><%= book.getName() %></td>
            <td><%= book.getTitle() %></td>
        </tr>
        <% 
                }
            } else { 
        %>
        <tr>
            <td colspan="3">No books found.</td>
        </tr>
        <% } %>
    </table>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>
