import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

function Audience({ reserved }) {
    const [clicked, setClicked] = useState(false);

    function yourChoice() {
        setClicked(!clicked)
    }

    return (
        <Seat
            reserved={reserved}
            onClick={yourChoice}
            className={clicked ? "picked" : "auto"}
        >
        </Seat>
    )
}

export default Audience;

const Seat = styled.span`
    display: inline;
    position: relative;
    margin: 5px;
    border: 1px solid;
    width: 55px;
    height: 55px;
    background-color: ${props => props.reserved ? 'rgb(29, 21, 7)' : 'auto'};
    `