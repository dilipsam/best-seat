import React, {Component} from 'react';
import Row from './Row';


class Venue extends Component {
  render() {
    const {rows, columns} = this.props;

    return (
      <div className="container">
        {
          [...Array(rows)].map((e, i) => {
            return <Row key={i}
              row={String.fromCharCode(97 + i)}
              columns={columns}>{i}</Row>;
          })
        }
      </div>
    );
  }
}

export default Venue;
