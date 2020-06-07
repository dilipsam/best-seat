import {CHANGE_DEMAND, FETCH_BOOKING_SUCCESS} from '../actions/bookings.action';

function bookings(state = {
  demand: 1,
  layout: {
    rows: 0,
    columns: 0,
  },
  seats: {},
}, {type, value}) {
  switch (type) {
    case FETCH_BOOKING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        layout: value.venue.layout,
        seats: value.seats,
      };
    case CHANGE_DEMAND:
      return {
        ...state,
        demand: value,
      };
    default:
      return state;
  }
}

export default bookings;
