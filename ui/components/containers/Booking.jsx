import React, {Component} from "react";
import {connect} from 'react-redux'
import Venue from '../Venue';
import {fetchBooking} from '../../actions/index'
import Request from "./Request";

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
        const {seats, venue, best} = this.props;

        return (
            <>
                <Venue availability={seats} info={venue} best={best}/>
                <Request/>
            </>
        )
    }

}

export const mapStateToProps = ({bookings}) => {
    return {
        venue: bookings?.data.venue,
        seats: bookings?.data.seats,
        best: bookings?.data.best
    }
};

export default connect(mapStateToProps)(Booking);