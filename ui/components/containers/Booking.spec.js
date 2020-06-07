import React from 'react';
import Booking, {mapStateToProps} from "./Booking";
import renderer from 'react-test-renderer';

describe('The Booking Screen Component', () => {
    describe('The Container Element', () => {
        it('should map the state to props correctly', () => {
            const appState = {
                "bookings": {
                    "data": {
                        "venue": {
                            "layout": {
                                "rows": 10,
                                "columns": 50
                            }
                        },
                        "seats": {
                            "a1": {
                                "id": "a1",
                                "row": "a",
                                "column": 1,
                                "status": "AVAILABLE"
                            }
                        },
                        "best": ["a1"]
                    }
                }
            };
            const componentState = mapStateToProps(appState);

            expect(componentState).toStrictEqual({
                "venue": {
                    "layout": {
                        "rows": 10,
                        "columns": 50
                    }
                },
                "seats": {
                    "a1": {
                        "id": "a1",
                        "row": "a",
                        "column": 1,
                        "status": "AVAILABLE"
                    }
                },
                "best": ["a1"]
            })
        })
    });
});

