import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from 'src/app/services/books.service';
import { BooksActions, BooksApiActions } from 'src/app/state/books.actions';
import { selectBookCollection, selectBooks } from 'src/app/state/books.selector';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  booksCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: BooksService, private store: Store) {
    console.log('Bonjour NGRX');
  }

  /**
   * Assign the book list from Google to the store
   */
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  /**
   * Add a book to the store
   * @param bookId 
   */
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  /**
   * Remove a book from the store
   * @param bookId 
   */
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
