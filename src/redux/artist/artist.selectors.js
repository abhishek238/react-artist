import {createSelector} from 'reselect';

const selectArtist = state => state.artist;

export const selectArtists = createSelector(
    [selectArtist],
    artist => artist.artists
);

export const selectArtistForPreview = createSelector(
    [selectArtists],
    artists =>
        artists ? artists[Math.floor(Math.random() * artists.length)] : {}
);