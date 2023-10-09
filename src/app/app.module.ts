import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';
import { WeiConvertPipe } from './pipes/wei-convert.pipe';
import { ClubComponent } from './sorare/club/club/club.component';


@NgModule({
  declarations: [
    AppComponent,
    MyClubComponent,
    WeiConvertPipe,
    ClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    HighlightModule,
    AngularCheatSheetComponent,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
      // InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue:<HighlightOptions>{
      lineNumbers:true,
      coreLibraryLoader: ()=> import('ngx-highlightjs'),
      // languages: {
        // typecript: ()=> import('highlight.js/lib/languages/typecript'),
        // css: ()=> import('highlight.js/lib/languages/css')
      // }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
