package com.book.books.service;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.books.entity.Books;
import com.book.books.repository.BooksRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Service
public class BookService {
		@Autowired
		private BooksRepository booksRepository;
		  @PersistenceContext
		    private EntityManager entityManager;
		  @Transactional
		public Books saveDetail(Books book) {
			 if (book.getName() == null || book.getName().trim().isEmpty()) {
		            throw new RuntimeException("Book name cannot be empty!");
		        }
		        if (book.getTitle() == null || book.getTitle().trim().isEmpty()) {
		            throw new RuntimeException("Book title cannot be empty!");
		        }

		        // Check if a book with the same name already exists
		        Long count = entityManager.createQuery(
		            "SELECT COUNT(b) FROM Books b WHERE b.name = :name", Long.class)
		            .setParameter("name", book.getName())
		            .getSingleResult();

		        if (count > 0) {
		            throw new RuntimeException("A book with the same name already exists!");
		        }

		        // Save the book
		        entityManager.persist(book);
		        return book;
		}
		public Books findById(Integer id) {
			 java.util.Optional<Books> book = booksRepository.findById(id);
		        return book.orElse(null); 
		}
		public void deleteAllBook() {
			booksRepository.deleteAll();
		}
		public List<Books> findAllBook(){
			return entityManager.createQuery("SELECT b FROM Books b", Books.class).getResultList();

		}
		public void deleteById(Integer id) {
			booksRepository.deleteById(id);
		}
		public Books updateBook(int id, Books updatedBook) {
		    Books existingBook = booksRepository.findById(id).orElse(null);

		    if (existingBook != null) {
		        existingBook.setName(updatedBook.getName());
		        existingBook.setTitle(updatedBook.getTitle());
		        return booksRepository.save(existingBook);
		    } else {
		        throw new RuntimeException("Book with ID " + id + " not found!");
		    }
		}
		
}
