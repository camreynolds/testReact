import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const {books} = useContext(BookContext);
    return ( 
        <div className='book-list'>
            <ul>
                    {books.map( book => 
                        <li key={book.id}>
                            <div className='title'>{book.title}</div>
                            <div className='author'>{book.author}</div>
                        </li>
                    )
                }
            </ul>
        </div>
     );
}
 
export default BookList;