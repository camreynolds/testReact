import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const {books, dispatch} = useContext(BookContext);
    
	return ( 
		<div className='book-list'>
			<ul>
				{books.map( book => {                     
					return(
					<li onClick={() => dispatch({type:'REMOVE_BOOK', payload:book.id})} key={book.id}>
						<div className='title'>{book.title}</div>
						<div className='author'>{book.author}</div>
					</li>
				)})}
			</ul>
		</div>
	);
}
 
export default BookList;