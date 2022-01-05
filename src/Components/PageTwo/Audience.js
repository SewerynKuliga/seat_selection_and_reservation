import React from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { ReservationContext } from "../../Contexts/ReservationContext";

function Audience({ reserved, seat }) {
  const { chosenSeats, options } = useContext(ReservationContext);
  const [pickedPlace, setPickedPlace] = useState(false);
  const selectedSeats = chosenSeats.map((seats) => seats.id);

  const handleClick = (seat) => {
    setPickedPlace(!pickedPlace);
    seat.reserved === true ? chosenSeats.push() : chosenSeats.push(seat);
    if (chosenSeats.length > options) {
      chosenSeats.length = 0;
      setPickedPlace(false);
    }
    console.log(chosenSeats);
    console.log(options);
  };

  return (
    <Seat
      reserved={reserved}
      onClick={() => {
        handleClick(seat);
      }}
      className={pickedPlace ? "picked" : "auto"}
    ></Seat>
  );
}

export default Audience;

const Seat = styled.div`
  display: inline;
  position: relative;
  margin: 8%;
  border: 1px solid;
  height: 50px;
  background-color: ${(props) => (props.reserved ? "rgb(29, 21, 7)" : "auto")};
`;
