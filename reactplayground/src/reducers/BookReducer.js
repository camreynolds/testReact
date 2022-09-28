import { v1 as uuidv1} from 'uuid';

export const BookReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return[...state, {
                title: action.payload.title, 
                author: action.payload.author, 
                id: uuidv1()
            }]
        case 'REMOVE_BOOK':
            return state.filter( book => book.id !== action.payload)
        default:
            return state
    }
}
 
export default BookReducer;