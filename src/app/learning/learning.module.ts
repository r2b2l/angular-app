import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import { LearningRoutingModule } from './learning-routing.module';
import { BookListComponent } from './ngrx/book-list/book-list.component';
import { BookCollectionComponent } from './ngrx/book-collection/book-collection.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from '../state/books.reducer';
import { collectionReducer } from '../state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NgrxComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    LearningRoutingModule,
    HttpClientModule
  ]
})
export class LearningModule { }
