import React, {createContext, useReducer} from 'react';
// import {v1 as uuidv1} from 'uuid';
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer,[]);
    // const addBook = (title, author) => {
    //     setBooks([...books,{title:title, author: author, id: uuidv1()}]);
    // };
    // const removeBook = (id) => {
    //     setBooks(books.filter( book => book.id !== id));
    // };
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
        
     );
};
 
export default BookContextProvider;