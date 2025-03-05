package com.book.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.book.books.service.BookService;

import jakarta.servlet.http.HttpServletRequest;

import com.book.books.entity.Books;

@RestController
@RequestMapping("/books")  // Base URL for endpoints

@CrossOrigin(origins = "http://localhost:3000") 
public class BooksController {

    @Autowired
    private BookService bookService;

    @PostMapping("/postBook")
    public Books postDetails(@RequestBody Books book) {
        return bookService.saveDetail(book);
    }
    @GetMapping("/getBook/{id}")
    public Books getBooks(@PathVariable Integer id) {
    	return bookService.findById(id);
    }
    @GetMapping("/getAllBook")
    public List<Books>getAllBook(){
    	return bookService.findAllBook();
    }
    @DeleteMapping("/delete")
    public void deleteAllBook() {
    	bookService.deleteAllBook();
    }
    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Integer id) {
    	bookService.deleteById(id);
    	return "Deleted";
    }
    @PutMapping("/update/{id}")
    public Books updateBook(@PathVariable int id, @RequestBody Books updatedBook) {
        return bookService.updateBook(id, updatedBook);
    }
}
