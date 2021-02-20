import {GET_ALBUMS, LOADING_ALBUMS} from '../types/albumsTypes';
import {Dispatch} from 'redux'

export const GetAlbums = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: LOADING_ALBUMS
        })
    } catch(err) {

    }
}