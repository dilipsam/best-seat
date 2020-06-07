import {CHANGE_DEMAND, FETCH_BOOKING, FETCH_BOOKING_SUCCESS} from '../actions';
import {computeBest} from '../services/bookings.service';

function bookings(state = {
  demand: 1,
  data: {},
  best: [],
}, action) {
  switch (action.type) {
    case FETCH_BOOKING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.json,
        best: computeBest(
            action.json.seats,
            action.json.venue.layout,
            state.demand),
      });
    case CHANGE_DEMAND:
      return Object.assign({}, state, {
        demand: action.value,
        best: [].concat(computeBest(
            state.data.seats,
            state.data.venue.layout,
            action.value)),
      });
    default:
      return state;
  }
}

export default bookings;
