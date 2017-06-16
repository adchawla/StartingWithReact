import PropTypes from 'prop-types';
import React from 'react';


const Star = ({ selected = false, onClick = f=>f }) =>
    <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.boolean,
    onClick: PropTypes.function
}

export default Star;
