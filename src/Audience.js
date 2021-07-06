import React from 'react'
import styled from 'styled-components'
import { useState } from "react";

const Seat = styled.span`
    display: inline-block;
    position: relative;
    margin: 5px;
    border: 1px solid;
    width: 50px;
    height: 50px;
    background-color: ${props => props.reserved ? 'rgb(29, 21, 7)' : 'auto'};
    `

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