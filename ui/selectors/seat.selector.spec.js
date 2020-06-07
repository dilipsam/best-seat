import {combiner} from "./seat.selector";
import {findWeight} from "../actions/bookings.action";

describe('Best Seats Selector', () => {
    it('should return empty array if demand is 0', () => {
        let best = combiner({}, {rows: 50, columns: 50}, 0);
        expect(best).toEqual([]);
    });

    it('should return empty array if demand is greater than number of columns', () => {
        let best = combiner({}, {rows: 50, columns: 50}, 51);
        expect(best).toEqual([]);
    });

    it('should return empty array if none of the seats are available', () => {
        let best = combiner({}, {rows: 50, columns: 50}, 1);
        expect(best).toEqual([]);
    });

    it('should return the only seat available if the demand is 1', () => {
        let best = combiner({
            "a1": {
                "id": "a1",
                "status": "AVAILABLE",
                "weight": 1
            }
        }, {rows: 50, columns: 50}, 1);

        expect(best).toContain("a1");
    });

    it('should return a6 for a venue with 10 rows and 12 columns with all seats open', () => {
        let seats = {};

        for (let column = 1; column <= 12; column++) {
            seats['a' + column] = {
                id: 'a' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 12)
            };
        }

        let best = combiner(seats, {rows: 10, columns: 12}, 1);
        expect(best).toEqual(["a6"]);
    });

    it('should return a5, a6 and a7 for a venue with 10 rows and 12 columns for a group of 3', () => {
        let seats = {};

        for (let column = 1; column <= 12; column++) {
            seats['a' + column] = {
                id: 'a' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 12)
            };

            seats['b' + column] = {
                id: 'b' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 12)
            };
        }

        let best = combiner(seats, {rows: 10, columns: 12}, 3);
        expect(best).toEqual(["a5", "a6", "a7"]);
    });

    it('should return b2 and b3 for five columns and first row unavailable', () => {
        let seats = {};

        for (let column = 1; column <= 5; column++) {
            // mark both B and C rows as available
            seats['b' + column] = {
                id: 'b' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 5)
            };

            seats['c' + column] = {
                id: 'c' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 5)
            };
        }
        let best = combiner(seats, {rows: 10, columns: 5}, 2);
        expect(best).toEqual(["b2", "b3"]);
    });

    it('should return a3 for 6 columns and all available for demand of 1', () => {
        let seats = {};

        for (let column = 1; column <= 6; column++) {
            seats['a' + column] = {
                id: 'a' + column,
                status: 'AVAILABLE',
                weight: findWeight(column, 6)
            };
        }
        let best = combiner(seats, {rows: 10, columns: 6}, 1);
        expect(best).toEqual(["a3"]);
    })
});