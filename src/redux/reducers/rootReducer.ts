import {combineReducers} from 'redux';
import albumsReducers from './albumsReducers';

const RootReducer = combineReducers({
    albums: albumsReducers
});

export default RootReducer;

/* https://jsonplaceholder.typicode.com/albums */