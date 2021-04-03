import {createSelector} from 'reselect';

const selectArt = state => state.art;

export const selectArts = createSelector(
    [selectArt],
    art => art.arts
);

export const selectArtForPreview = createSelector(
    [selectArts],
    arts =>
        arts ? arts[Math.floor(Math.random() * arts.length)] : {}
);