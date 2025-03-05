<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.book.books.entity.Books" %>
<!DOCTYPE html>
<html>
<head>
    <title>Book Details</title>
</head>
<body>
    <h2>Book Details</h2>
    <%
        Books book = (Books) request.getAttribute("book");
    %>
    <p><b>ID:</b> <%= book.getId() %></p>
    <p><b>Name:</b> <%= book.getName() %></p>
    <p><b>Title:</b> <%= book.getTitle() %></p>
    <a href="/books">Back to Book List</a>
</body>
</html>
