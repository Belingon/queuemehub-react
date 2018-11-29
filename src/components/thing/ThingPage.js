import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThingPage extends Component{
    render() {
        return(
            <div style={{width: 200, height: 500}}>
                {this.props.otherValue}
            </div>
        )
    }
}

ThingPage.PropTypes = {
    otherValue: PropTypes.string.isRequired
}
export default ThingPage;