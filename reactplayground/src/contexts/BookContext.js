import React, {createContext, useState} from 'react';
import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: uuidv1(),
            title: 'El coronel no tiene quien le escriba.',
            author: 'Gabriel García Márquez.'
        },
        {
            id: uuidv1(),
            title: 'El general en su laberinto.',
            author: 'Gabriel García Márquez.'
        }
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
        
     );
};
 
export default BookContextProvider;