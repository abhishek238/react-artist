import {createSelector} from 'reselect';

const selectArt = state => state.art;

export const selectArts = createSelector(
    [selectArt],
    art => art.arts.sort(() => .5 - Math.random())
);

export const selectArtForPreview = createSelector(
    [selectArts],
    arts =>
        arts ? arts[Math.floor(Math.random() * arts.length)] : {}
);