import fetch from 'cross-fetch';
import {each as _each} from 'lodash';

export const FETCH_BOOKING_SUCCESS = 'FETCH_BOOKING_SUCCESS';
export const CHANGE_DEMAND = 'CHANGE_DEMAND';

/** *
 *
 * @param {string} type action Identifier
 * @param {any} value data
 * @return {{type: *, value: *}}
 */
function onSuccess(type, value) {
  return {
    type,
    value,
  };
}

/** *
 *
 * @param identifier
 * @return {function(*): *}
 */
export function fetchBooking(identifier = 1) {
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


/**
 * Compute a Weight to a seat the max weight would be #coulmns/2
 * @param {number} column the current column number
 * @param {number} columns total number of columns
 * @return {number} the weight of the column
 */
export function findWeight(column, columns) {
  const middle = Math.ceil(columns / 2);

  if (!column || !columns || column > columns) return -1;

  if (column <= middle) {
    return column;
  }

  return columns - (column - 1);
}

/**
 * @param {number} venueId id of the venue; defaults to 1
 * @param {function} callback to return
 * @return {function(...[*]=)}
 */
export function get(venueId = 1, callback) {
  return () => {
    fetch(
        `http://localhost:3000/api/v1/venues/${venueId}`,
    ).then(
        (response) => response.json(),
        (err) => console.log('err', err),
    ).then(
        (response) => {
          const columns = response.venue.layout.columns;

          _each(response.seats, (seat) => {
            seat.weight = findWeight(seat.column, columns);
          });

          return response;
        },
    ).then(callback);
  };
}

