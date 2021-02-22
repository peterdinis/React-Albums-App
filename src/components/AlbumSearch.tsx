import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storeType} from '../redux/types/storeType';
import {getAlbums} from '../redux/actions/albumsActions';
import {DivWrapper, HeaderOne, SearchInput, ButtonSearch, SearchedAlbum, AlbumName, InfoText} from './AlbumSearch.styled';

function AlbumSearch() {
    const dispatch = useDispatch();
    const [albumId, setAlbumId] = useState('');
    const albumState = useSelector((state: storeType) =>state.albums);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAlbumId(e.target.value);
    }
    

    const handleClick = () => {
        dispatch(getAlbums(albumId));
    }
    
    return (
        <DivWrapper>
            <HeaderOne>Album Finder</HeaderOne>
            <InfoText>Po zadaní čísla od 1 do 50 sa zobrazí album viac ako 51 sa už album nezobrazí </InfoText>
            <SearchInput type='text' onChange={handleChange} />
            <ButtonSearch onClick={handleClick}>
                SUBMIT
            </ButtonSearch>

            <SearchedAlbum>
                <AlbumName>
                    Hľdaní album: {albumState.album?.title}
                </AlbumName>
            </SearchedAlbum>
        </DivWrapper>

        
    )
}

export default AlbumSearch
