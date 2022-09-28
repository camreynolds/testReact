import React, {createContext, useReducer, useEffect} from 'react';
// import {v1 as uuidv1} from 'uuid';
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer,[], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect( () => {
        localStorage.setItem('books', JSON.stringify(books))
    },[books])
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