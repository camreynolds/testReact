import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const {books, removeBook} = useContext(BookContext);
    
	return ( 
		<div className='book-list'>
			<ul>
				{books.map( book => {                     
					return(
					<li onClick={() => removeBook(book.id)} key={book.id}>
						<div className='title'>{book.title}</div>
						<div className='author'>{book.author}</div>
					</li>
				)})}
			</ul>
		</div>
	);
}
 
export default BookList;