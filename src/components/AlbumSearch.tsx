import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storeType} from '../redux/types/storeType';
import {getAlbums} from '../redux/actions/albumsActions';

function AlbumSearch() {
    const dispatch = useDispatch();
    const [albumName, setAlbumName] = useState('');
    const albumState = useSelector((state: storeType) =>state.albums);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAlbumName(e.target.value);
    }

    const handleClick = () => {
        dispatch(getAlbums());
    }

    console.log(albumState);
    return (
        <div>
            <input type='text' onChange={handleChange} />
            <button onClick={handleClick}>
                SUBMIT
            </button>

           
        </div>
    )
}

export default AlbumSearch
