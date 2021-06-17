import { combineReducers } from 'redux';

import activityReducer from './activityReducer';
import notesReducer from './notesReducer';
import authReducer from './authReducer';

export default combineReducers({
    activity: activityReducer,
    notes: notesReducer,
    auth: authReducer
});