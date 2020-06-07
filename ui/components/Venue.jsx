import React, {Component} from 'react';
import Row from './Row';


class Venue extends Component {
  render() {
    return (
      <div className="container">
        {
          [...Array(this.props.info?.layout.rows)].map((e, i) => {
            return <Row key={i}
              availability={this.props.availability}
              row={String.fromCharCode(97 + i)}
              columns={this.props.info?.layout.columns}>{i}</Row>;
          })
        }
      </div>
    );
  }
}

export default Venue;
