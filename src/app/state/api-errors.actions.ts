import { createAction, createActionGroup, props } from "@ngrx/store";
import { HttpError } from "../models/http-error";

/**
 * Création des différentes actions pour la gestion des erreurs
 */
export const ApiErrorActions = createActionGroup({
    source: 'Api Errors',
    events: {
        'Add Error': props<HttpError>(),
        'Remove Error': props<HttpError>(),
        'Display error': props<{ errorCode: string, errorMessage: string }>(),
        'Clear error': props<{ message?: any}>()
    }

})