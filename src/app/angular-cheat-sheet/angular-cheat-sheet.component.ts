import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'angular-cheat-sheet',
  templateUrl: './angular-cheat-sheet.component.html',
  // styleUrls: ['./angular-cheat-sheet.component.scss'],
  standalone: true,
  imports: [CommonModule,HighlightModule]
})
export class AngularCheatSheetComponent {
  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;
  dec1 = `import { NgModule } from '@angular/core';
  @NgModule({...})
  export class AppModule { }`;
  dec2 = `@Component({...}) 
class MyComponent() {}`;
  dec3 = `  import { Directive, ... } from
'@angular/core';`;
  dec4 = `@Pipe({...}) 
class MyPipe() {}`;
  dec5 = `@Injectable() 
class MyService() {}`;

  dec6 = `import { Inp } from  '@angular/core';`;
  dec7 = `@Input() myProperty;`;
  dec8 = `@Output() myEvent = new EventEmitter();`;
  dec9 = `@HostBinding('class.valid') isValid;`;
  dec10 = `@HostListener('click', ['$event']) onClick(e) {...}`;
  dec11 = `@ContentChild(myPredicate) myChildComponent;`;
  dec12 = `@ContentChildren(myPredicate) myChildComponents;`;
  dec13 = `@ViewChild(myPredicate) myChildComponent;`;
  dec14 = `@ViewChildren(myPredicate) myChildComponents;`;
  dec15 = `{ provide: InterviewBitService, useClass: InterviewBitMockService }`;
  dec16 = `{ provide: InterviewBitService, useFactory: InterviewBitFactory }`;
  dec17 = `{ provide: InterviewBitValue, useValue: 56 }`;
  dec18 = `  constructor(private myService: MyService) {
    this.message = this.myService.getMessage();
  }`;

  comp1 = `<div [ngClass]='isInterviewBitSpecial ? 'Yes' : '''>This company is special</div>`;
  comp2 = `<div [ngStyle]='{ "font-height": 3 +3 === 6 ? 'light'   : 'normal', }'> This div is light. </div>`;
  comp3 = `<input [(ngModel)]="interviewBit">`;

  twoWayBinding = `<input [(ngModel)]="message" type="text">
  <p>{{ message }}</p>
  export class MyComponent {
    message: string = 'Hello Angular!';
  }`;

  cdRefEx1 = `import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';`;
  cdRefEx2 = `@Component({
    selector: 'app-votre-composant',
    templateUrl: './votre-composant.component.html',
    styleUrls: ['./votre-composant.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  constructor(private cdr: ChangeDetectorRef) {}`;
  cdRefEx3 = `updateData() {
    // Modifiez data en créant une nouvelle référence pour déclencher la détection des changements
    this.data = { ...this.data, updated: true };
    // Appel manuel de detectChanges() pour mettre à jour le composant
    this.cdr.detectChanges();
  }`;
    cdRefEx4 = `<div>{{ data$ | async }}</div>`;

  var1 = `let fullName: string = \`Erwan\`;
  let age: number = 37;
  let sentence: string = \`Hello, my name is \${fullName}.
   
  I'll be \${age + 1} years old next month.\`;`;

  var2 = `let list: Array<number> = [1, 2, 3];`;

  handleError = `  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log('Failed');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }`;

  subscribeEx = `this.heroService.addHero({name} as Hero)
  .subscribe(hero =>{
    this.heroes.push(hero);
  });`;

  observableFunct =  `addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log('Added hero with id=' + newHero.id)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }`;

  ngForEx = `<li *ngFor="let book of bookList; let index = index">`;

  date = new Date();
  text = 'Phrase test';
}
