import React, {Component} from "react";
import {connect} from 'react-redux'
import Venue from '../Venue';
import Request from "./Request";
import {fetchBooking} from '../../actions/bookings.action';

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            venueId: 1
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchBooking(this.state.venueId));
    }


    render() {
        const {seats, rows, columns, best} = this.props;

        return (
            <>
                <Venue seats={seats} rows={rows} columns={columns}/>
                <Request/>
            </>
        )
    }

}

export const mapStateToProps = (state) => {
    const bookings = state.bookings;

    return {
        rows: bookings.layout.rows,
        columns: bookings.layout.columns
    }
};

export default connect(mapStateToProps)(Booking);