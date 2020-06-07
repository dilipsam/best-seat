import React, {Component} from 'react';
import Seat from './containers/Seat';

class Row extends Component {
  render() {
    const {row, columns} = this.props;

    return (
      <div className='row'>
        {
          [...Array(columns)].map((e, i) => {
            return <Seat id={row + (i + 1)} key={i}/>;
          })
        }
      </div>
    );
  }
}

export default Row;
