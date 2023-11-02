import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';
import { WeiConvertPipe } from './pipes/wei-convert.pipe';
import { ClubComponent } from './sorare/club/club/club.component';
import { MatSortModule } from '@angular/material/sort';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { apiErrorsReducer } from './state/api-errors.reducer';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClubComponent,
    WeiConvertPipe,
    ClubComponent,
    ErrorComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    HighlightModule,
    StoreModule.forRoot({ apiErrors: apiErrorsReducer, books: booksReducer, collection: collectionReducer }),
    AngularCheatSheetComponent,

    // Dev
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    // InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('ngx-highlightjs'),
        // languages: {
        // typecript: ()=> import('highlight.js/lib/languages/typecript'),
        // css: ()=> import('highlight.js/lib/languages/css')
        // }
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
