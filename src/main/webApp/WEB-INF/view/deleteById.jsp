<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Delete Book by ID</title>
</head>
<body>

    <h2>Delete a Book by ID</h2>

    <form action="deleteBookById" method="post" onsubmit="return confirm('Are you sure you want to delete this book?');">
        <label for="bookId">Enter Book ID:</label>
        <input type="number" id="bookId" name="bookId" required>
        <br><br>

        <button type="submit">Delete Book</button>
    </form>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>

