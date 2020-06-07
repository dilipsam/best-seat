import React, {Component} from "react";
import {connect} from 'react-redux'
import {changeDemand} from "../../actions";


class Request extends Component {

    constructor(props) {
        super(props);

    }

    setDemand(offset) {
        const {dispatch} = this.props;

        // Ensure count doesn't go below 1
        if(offset === -1 && this.props.demand === 1) return;
        dispatch(changeDemand(this.props.demand + offset));
    }

    render() {
        return (
            <div className='container request'>
                <span className="control" onClick={() => this.setDemand(-1)}>-</span>
                <span className="counter">{this.props.demand}</span>
                <span className="control" onClick={() => this.setDemand(+1)}>+</span>
                <div>seats</div>
            </div>
        )
    }
}


export default connect(({bookings}) => {
    return {
        demand: bookings.demand
    }
})(Request);