import React, {Component} from "react";
import {connect} from 'react-redux'

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

export default connect(({bookings}, {id}) => {
    let seat = JSON.parse(JSON.stringify(bookings?.data?.seats?.[id] || {}));

    if (bookings?.best && bookings?.best.length) {
        seat.isPreferred = bookings.best.includes(seat.id);
    }

    return seat;

})(Seat);