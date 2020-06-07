import React, {Component} from "react";
import {connect} from 'react-redux'
import {clone as _clone} from 'lodash';
import {getBestSeats} from "../../selectors/seat.selector";

class Seat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {status} = this.props;
        const isOccupied = status !== 'AVAILABLE';

        let styleClass = 'seat';
        if (isOccupied) {
            styleClass += ' occupied'
        }
        if (this.props.isPreferred) {
            styleClass += ' best';
        }

        return (
            <span className={styleClass}></span>
        )
    }

}

export default connect((state, {id}) => {
    const {bookings = {}} = state;
    const best = getBestSeats(state);

    let seat = _clone(bookings?.seats[id] || {});

    if (best && best.length) {
        seat.isPreferred = best.includes(seat.id);
    }

    return seat;

})(Seat);