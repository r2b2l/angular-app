import { createReducer, on } from "@ngrx/store";
import { BooksActions } from "./books.actions";

export const initialState: ReadonlyArray<string>= [];

export const collectionReducer = createReducer(
    initialState,
    on(BooksActions.removeBook, (state, { bookId }) =>
        state.filter((id) => id !== bookId)
    ),
    on(BooksActions.addBook, (state, { bookId }) => {
        // If book already exists, don't add it 
        if(state.indexOf(bookId) > -1) {
            return state;
        } 

        return [... state, bookId]
    })
)