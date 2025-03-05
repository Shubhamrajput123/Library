<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Update Book</title>
</head>
<body>

    <h2>Update Book</h2>

    <form action="updateBook" method="post">
        <label for="bookId">Book ID:</label>
        <input type="number" id="bookId" name="bookId" required>
        <br><br>

        <label for="bookName">New Book Name:</label>
        <input type="text" id="bookName" name="bookName" required>
        <br><br>

        <label for="bookTitle">New Book Title:</label>
        <input type="text" id="bookTitle" name="bookTitle" required>
        <br><br>

        <button type="submit">Update</button>
    </form>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>
