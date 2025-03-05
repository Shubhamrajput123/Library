package com.book.books.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.book.books.entity.Books;
import com.book.books.service.BookService;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index"; // This will map to WEB-INF/views/index.jsp
    }@Autowired
    private BookService bookService;

    @PostMapping("/saveBook")
    public ModelAndView saveBook(@RequestParam String bookName, @RequestParam String bookTitle) {
    	if (bookName == null || bookName.isEmpty()) {
            throw new RuntimeException("Book name cannot be empty!");
        }
        
        Books book = new Books();
        book.setName(bookName);
        book.setTitle(bookTitle);
        bookService.saveDetail(book);

        return new ModelAndView("redirect:/");
    }
    @GetMapping("/addBook")
    public String showAddBookPage() {
        return "addBook";  // This will load WEB-INF/views/addBook.jsp
    }
    
    @GetMapping("/findById")
    public String findBookById(@RequestParam(required = false) Integer bookId, Model model) {
        if (bookId == null) {
            model.addAttribute("message", "Please enter a Book ID.");
            return "findById"; // Show the findById.jsp page with a message
        }
        
        Books book = bookService.findById(bookId);
        if (book != null) {
            model.addAttribute("book", book);
        } else {
            model.addAttribute("error", "Book not found!");
        }
        return "findById"; // Redirects to findById.jsp
    }


    @GetMapping("/findAll")
    public String findAllBooks(Model model) {
        List<Books> books = bookService.findAllBook(); // Fetch all books from the service
        model.addAttribute("bookList", books); // Send book list to JSP
        return "findAll"; // Matches JSP file (findAll.jsp)
    }

    @PostMapping("/deleteAllBooks")
    public String deleteAllBooks() {
        bookService.deleteAllBook(); // Calls service method to delete all books
        return "redirect:/"; // Redirects to home after deletion
    }
    @GetMapping("/deleteById")
    public String showDeleteByIdPage() {
        return "deleteById"; // Matches JSP filename (deleteById.jsp)
    }
    @PostMapping("/deleteBookById")
    public String deleteBookById(@RequestParam int bookId) {
        bookService.deleteById(bookId); // Calls service method to delete the book
        return "redirect:/"; // Redirects to home after deletion
    }
    @GetMapping("/deleteAll")
    public String showDeleteAllPage() {
        return "deleteAll"; // This should match your JSP file name (deleteAll.jsp)
    }

    @PostMapping("/updateBook")
    public String updateBook(@RequestParam int bookId, 
                             @RequestParam String bookName, 
                             @RequestParam String bookTitle, Model model) {
        Books book = bookService.findById(bookId);
        if (book == null) {
            model.addAttribute("error", "Book with ID " + bookId + " not found!");
            return "updateBook"; // Stay on the same page with an error message
        }

        book.setName(bookName);
        book.setTitle(bookTitle);
        
        bookService.updateBook(bookId,book); // Call the correct update method
        
        return "redirect:/"; // Redirect to home after update
    }
    


    @GetMapping("/updateBook")
    public String showUpdateBookPage() {
        return "update"; // This should match your JSP file name (updateBook.jsp)
    }
}
