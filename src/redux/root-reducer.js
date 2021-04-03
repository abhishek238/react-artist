import {combineReducers} from 'redux';

import artistReducer from './artist/artist.reducer';
import artReducer from './art/art.reducer';

const rootReducer = combineReducers({
    artist: artistReducer,
    art: artReducer
});

export default rootReducer;