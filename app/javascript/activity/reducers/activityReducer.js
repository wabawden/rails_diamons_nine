import { FETCH_STATE, FETCH_TILE_ACTIVITY, NEW_ACTIVITY } from '../actions/types';
import { tileActivity } from '../initialState';


export default (state = [tileActivity], action) => {
    switch (action.type) {
        case FETCH_TILE_ACTIVITY:
            return { ...state, tileActivity};
        case FETCH_STATE:
            return {...state};
        default:
            return tileActivity;
    }
};