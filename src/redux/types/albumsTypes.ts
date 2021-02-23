export const ALBUMS_LOADING = "ALBUMS_LOADING";
export const ALBUMS_FAIL = "ALBUMS_FAIL";
export const ALBUMS_SUCCESS = "ALBUMS_SUCCESS";

export type AlbumsType = {
    userId: number
    id: number,
    title: string,
}

export interface AlbumLoading {
    type: typeof ALBUMS_LOADING;
}

export interface AlbumFail {
    type: typeof ALBUMS_FAIL
}

export interface AlbumsSuccess {
    type: typeof ALBUMS_SUCCESS,
    payload: AlbumsType
}

export type AlbumDispatchTypes = AlbumLoading | AlbumFail | AlbumsSuccess;