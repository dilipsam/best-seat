import {createSelector} from 'reselect';
import {map as _map, isEmpty as _isEmpty} from 'lodash';

const getSeats = ({bookings}) => bookings?.seats;
const getLayout = ({bookings}) => bookings.layout || {};
const getDemand = ({bookings}) => bookings.demand;

export function combiner(seats, layout, demand) {
    let best = [];
    let maxWeight = 0;

    // boundary check
    if (demand < 1 || demand > layout.columns || _isEmpty(seats)) return [];

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

export const getBestSeats = createSelector(
    [getSeats, getLayout, getDemand],
    combiner,
);
