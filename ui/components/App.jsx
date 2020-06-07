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
        <Provider store={store}>
          <Booking/>
        </Provider>
        <div className="container">
          <div className="row legend">
            <span className="seat occupied"/>
            <label>Occupied</label>
            <span className="seat"/>
            <label>Available</label>
            <span className="seat best"/>
            <label>Best</label>

          </div>
        </div>
      </>
    );
  }
}

export default App;
