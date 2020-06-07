import {get} from '../services/bookings.service';

export const FETCH_BOOKING = 'FETCH_BOOKING';
export const FETCH_BOOKING_SUCCESS = 'FETCH_BOOKING_SUCCESS';
export const CHANGE_DEMAND = 'CHANGE_DEMAND';

function onSuccess(type, json) {
  return {
    type,
    json,
  };
}

export function fetchBooking(identifier = 0) {
  return (dispatch) => {
    return dispatch(get(identifier, (json) => {
      dispatch(onSuccess(FETCH_BOOKING_SUCCESS, json));
    }));
  };
}

export function changeDemand(value) {
  return {
    type: CHANGE_DEMAND,
    value,
  };
}

