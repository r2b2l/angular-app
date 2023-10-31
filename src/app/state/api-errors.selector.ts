import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HttpError } from "../models/http-error";

export const apiErrorsState = createFeatureSelector<ReadonlyArray<HttpError>>('apiErrors');

export const selectApiErrors = createSelector(
    apiErrorsState,
    (apiErrors) => apiErrors
);