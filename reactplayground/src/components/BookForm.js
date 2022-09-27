import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title,author)
        setTitle('')
        setAuthor('')
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder='título' 
                onChange={ e => setTitle( e.target.value)} required/>
            <input type="text" value={author} placeholder='autor' 
                onChange={ e => setAuthor( e.target.value)} required/>
            <input type="submit" value='Añadir libro'/>
        </form>
     );
};
 
export default BookForm;