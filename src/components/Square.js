import React from 'react';
const styleSquare = {
    border: "2px solid black",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer"

}
const Square = (props) => {

    return (
        <button style={styleSquare} onClick={() => props.handleMove(props.index, props.el)}>
            {props.el}
        </button>
    );
};

export default Square;