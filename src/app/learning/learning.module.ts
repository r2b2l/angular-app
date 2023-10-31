import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx/ngrx.component';
import { LearningRoutingModule } from './learning-routing.module';
import { BookListComponent } from './ngrx/book-list/book-list.component';
import { BookCollectionComponent } from './ngrx/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NgrxComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    HttpClientModule
  ]
})
export class LearningModule { }
