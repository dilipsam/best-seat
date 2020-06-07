import fetch from 'cross-fetch';
import {each as _each, map as _map} from 'lodash';


/**
 * Compute a Weight to a seat the max weight would be #coulmns/2
 * @param {number} column the current column number
 * @param {number} columns total number of columns
 * @return {number} the weight of the column
 */
function findWeight(column, columns) {
    const middle = Math.ceil(columns / 2);

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
            `http://localhost:3000/api/v1/venues/1`,
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

/**
 * Returns the best possible continuous seats if present
 * @param {Object} seats  availability status and weight
 * @param {Object} layout Object rows and columns
 * @param {number} demand  of seats trying to book
 * @return {[]|*[]} array of the best seats
 */
export function computeBest(seats, layout, demand = 1) {
    let best = [];
    let maxWeight = 0;

    // boundary check
    if (demand < 1 || demand > layout.columns) return [];

    for (let i = 0; i < layout.rows && !best.length; i++) {
        const currentRow = String.fromCharCode(97 + i);
        for (let j = 1; j <= layout.columns; j++) {
            // find the consecutive seats to meet demand
            const currentSeat = seats[currentRow + j];
            const possibility = [];
            let weight = 0;

            // skip seat if not available
            if (!currentSeat || currentSeat.status !== 'AVAILABLE') {
                continue;
            }

            // check if adjacent seats are available to meet demand
            for (let occupant = 0; occupant < demand; occupant++) {
                const adjSeat = seats[currentRow + (j + occupant)];

                if (adjSeat && adjSeat.status === 'AVAILABLE') {
                    possibility.push(adjSeat);
                    weight += adjSeat.weight;
                } else {
                    weight = 0;
                    // break this loop if there aren't enough continuous seats
                    break;
                }
            }

            if (weight > 0 && weight > maxWeight) {
                maxWeight = weight;
                best = _map(possibility, 'id');
            }
        }
    }

    return best;
}
