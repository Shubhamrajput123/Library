<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Add Book</title>
</head>
<body>

    <h2>Add a New Book</h2>

    <form action="saveBook" method="post">
        <label for="bookName">Book Name:</label>
        <input type="text" id="bookName" name="bookName" required>
        <br><br>

        <label for="bookTitle">Book Title:</label>
        <input type="text" id="bookTitle" name="bookTitle" required>
        <br><br>

        <button type="submit">Submit</button>
    </form>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>
