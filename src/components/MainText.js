import React from "react"
import PropTypes from 'prop-types';

const MainText = ({ text }) => {
    return (
        <>
            <h1 style={{
                color: '#3f50b5',
                textShadow: "rgb(107 107 107 / 25%) 3px 4px 7px"
            }} >{text}</h1>
        </>

    );
}

MainText.propTypes = {
    text: PropTypes.string
}

export default MainText;