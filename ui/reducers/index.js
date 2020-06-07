import {combineReducers} from 'redux';
import bookings from './bookings.reducer';

const rootReducer = combineReducers({
  bookings,
});

export default rootReducer;
