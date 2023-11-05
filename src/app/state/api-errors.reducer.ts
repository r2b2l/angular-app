import { createReducer, on } from "@ngrx/store";
import { ApiErrorActions } from "./api-errors.actions";
import { HttpError } from "../models/http-error";

export const initialState: ReadonlyArray<HttpError> = [];

export const apiErrorsReducer = createReducer(
    initialState,
    on(ApiErrorActions.addError, (_state, httpError) => {
        const errorsIds = _state.map(function (item) { return item.id });
        console.log(errorsIds);
        if (errorsIds.indexOf(httpError.id) > -1) {
            return _state;
        }
        return [..._state, httpError]
    }),
    on(ApiErrorActions.removeError, (_state, httpError) => {
        return _state.filter((error) => error.id !== httpError.id);
    })
)