import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiErrorActions } from '../state/api-errors.actions';
import { HttpError } from '../models/http-error';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("HTTP Error Interceptor");
        console.log(error);
        this.store.dispatch(ApiErrorActions.addError(new HttpError(error.status, error.statusText)))
        // this.store.dispatch(ApiErrorActions.addError({errorCode: error.status, errorMessage: error.statusText}))
        return throwError(() => error);
      })
    );
  }
}
