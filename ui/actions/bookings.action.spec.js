import {findWeight} from "./bookings.action";

describe('Booking Action', () => {
    describe('Find Weight', () => {
        it('should return -1 if column is greater than columns', () => {
            expect(findWeight(3, 2)).toBe(-1);
        });

        it('should return -1 if column is not provided', () => {
            expect(findWeight(undefined, 2)).toBe(-1);
        });

        it('should return -1 if columns is not provided', () => {
            expect(findWeight(undefined, undefined)).toBe(-1);
        });

        it('should return column index of the middle column for the same in case of odd columns', () => {
            expect(findWeight(4, 7)).toBe(4);
            expect(findWeight(8, 15)).toBe(8);
            expect(findWeight(50, 99)).toBe(50);
        });

        it('should return one less than the column index of the middle column for the middle + 1 in case of odd columns', () => {
            expect(findWeight(5, 7)).toBe(3);
            expect(findWeight(9, 15)).toBe(7);
            expect(findWeight(51, 99)).toBe(49);
        });

        it('should return columns / 2 for the middle two  columns in case of even columns', () => {
            expect(findWeight(4, 8)).toBe(4);
            expect(findWeight(5, 8)).toBe(4);
            expect(findWeight(50, 100)).toBe(50);
            expect(findWeight(51, 100)).toBe(50);
        });

    });
});