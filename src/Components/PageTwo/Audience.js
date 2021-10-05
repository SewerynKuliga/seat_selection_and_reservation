import React from 'react';
import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import { ReservationContext } from '../../Contexts/ReservationContext';


function Audience({ reserved }) {
    const { seats, setSeats } = useContext(ReservationContext);
    const [chosen, setChosenSeats] = useState([])
    const [pickedPlace, setPickedPlace] = useState(false)

    const handleChange = (e) => {
        setPickedPlace(!pickedPlace);
        setChosenSeats({ 'id': e.target.value })
    }

    // const handleChange1 = (e) => {
    //     setChosenSeats(e.target.props.id)
    // }

    // const chosen = seats.slice(reserved)

    useEffect(() => {
        setPickedPlace(pickedPlace)
    }, [pickedPlace]);


    return (
        <Seat
            reserved={reserved}
            className={pickedPlace ? "picked" : "auto"}
            onClick={handleChange}
        // onChange={handleChange1}
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