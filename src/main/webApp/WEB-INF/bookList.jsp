<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List, com.book.books.entity.Books" %>
<!DOCTYPE html>
<html>
<head>
    <title>Library Books</title>
</head>
<body>
    <h2>Library Books</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Action</th>
        </tr>
        <%
            List<Books> booksList = (List<Books>) request.getAttribute("books");
            for (Books book : booksList) {
        %>
        <tr>
            <td><%= book.getId() %></td>
            <td><%= book.getName() %></td>
            <td><%= book.getTitle() %></td>
            <td><a href="books/<%= book.getId() %>">View Details</a></td>
        </tr>
        <% } %>
    </table>
</body>
</html>
