import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return ( 
        <div className='navbar'>
            <h1>Lista de libros</h1>
            <p>Actualmente tienes {books.length} libros por leer.</p>
        </div>
     );
}
 
export default Navbar;