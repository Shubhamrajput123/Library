<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Delete All Books</title>
</head>
<body>

    <h2>Delete All Books</h2>

    <form action="deleteAllBooks" method="post" onsubmit="return confirm('Are you sure you want to delete all books?');">
        <button type="submit">Delete All Books</button>
    </form>

    <br>
    <button onclick="window.location.href='/'">Back to Home</button>

</body>
</html>
