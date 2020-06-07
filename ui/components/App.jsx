import React, {Component} from 'react';
import Booking from './containers/Booking';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row legend">
                        <span className="seat best"/>
                        <label>Best Available Seat(s)</label>
                        <span className="seat"/>
                        <label>Available Seat(s)</label>
                    </div>
                </div>
                <Provider store={store}>
                    <Booking/>
                </Provider>
            </>
        );
    }
}

export default App;
