import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        currentBook: {
            name: '',
            author: ''
        },
    },

    reducers: {
        setBooks: (state, action)=> {
            state.books = action.payload
        },
        setCurrentBook: (state, action)=> {
            state.currentBook = action.payload
        },
    }
})

export const { setBooks, setCurrentBook } = slice.actions
export const selectBooks = state => state.book.books
export const selectCurrentBook = state => state.book.currentBook
export default slice.reducer