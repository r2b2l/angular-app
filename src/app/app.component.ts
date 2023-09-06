import { Component } from '@angular/core'; 
import {HighlightModule } from 'ngx-highlightjs';

const themeGit: string = 'node_modules/highlight.js/styles/github.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
