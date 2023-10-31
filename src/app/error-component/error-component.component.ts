import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectApiErrors } from '../state/api-errors.selector';
import { ApiErrorActions } from '../state/api-errors.actions';
import { HttpError } from '../models/http-error';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {
  errors$: Observable<ReadonlyArray<HttpError>>;

  constructor(private store: Store) {
    this.errors$ = this.store.pipe(select(selectApiErrors));
  }

  ngOnInit(): void {
    
  }

  clearError(error: HttpError): void {
    console.log(error);
    this.store.dispatch(ApiErrorActions.removeError(error));
  }

  log(o: any): void {
    console.log(o);
  }
}
