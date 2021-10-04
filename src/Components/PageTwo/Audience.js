import React from 'react';
import styled from 'styled-components';
import { useState, useContext } from "react";
import { ReservationContext } from '../../Contexts/ReservationContext';


function Audience({ reserved, picked }) {


    return (
        <Seat
            reserved={reserved}
            className={picked ? "picked" : "auto"}
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