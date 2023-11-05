import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AngularCheatSheetComponent } from './app/angular-cheat-sheet/angular-cheat-sheet.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AngularCheatSheetComponent, {
  providers: [
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
            fullLibraryLoader: () => import('highlight.js')
        }
    },
    provideAnimations(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations()
]
})