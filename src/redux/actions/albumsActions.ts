import {Dispatch} from "redux";
import {ALBUMS_LOADING, ALBUMS_SUCCESS, 
ALBUMS_FAIL, AlbumDispatchTypes} from "../types/albumsTypes";
import axios from "axios";


export const getAlbums = (id: string) => async (dispatch: Dispatch<AlbumDispatchTypes>) =>{
    try {
        dispatch({
            type: ALBUMS_LOADING
        })

        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);

        dispatch({
            type: ALBUMS_SUCCESS,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: ALBUMS_FAIL
        })
    }
}