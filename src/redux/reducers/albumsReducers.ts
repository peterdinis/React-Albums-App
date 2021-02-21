import albumInitialState from '../interfaces/albumInterface';
import { AlbumDispatchTypes, ALBUMS_LOADING, ALBUMS_FAIL, ALBUMS_SUCCESS } from '../types/albumsTypes';

const initialState: albumInitialState = {
    loading: false
};

const albumRootReducer = (state: albumInitialState = initialState, action: AlbumDispatchTypes): albumInitialState => {
    switch(action.type) {
        case ALBUMS_FAIL:
            return {
                loading: false
            };

        case ALBUMS_LOADING: 
            return {
                loading: true
            }

        case ALBUMS_SUCCESS:
            return {
                loading: false,
                album: action.payload
            }
        default:
            return state;
    }
}

export default albumRootReducer;