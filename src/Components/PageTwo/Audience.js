import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext} from "react";
import { ReservationContext } from "../../Contexts/ReservationContext";


function Audience({ reserved, seat}) {
  const { chosenSeats } = useContext(ReservationContext);
  const [pickedPlace, setPickedPlace] = useState(false);

  useEffect(() => {
    setPickedPlace(pickedPlace);
  }, [pickedPlace]);

  const handleClick = (seat) => {
    setPickedPlace(!pickedPlace);
    chosenSeats.push(seat);
    console.log(chosenSeats);
  };
  useEffect(() => {}, []);

  return (
    <Seat
      reserved={reserved}
      className={pickedPlace ? "picked" : "auto"}
      onClick={() => {
        handleClick(seat)
      }}
    ></Seat>
  );
}

export default Audience;

const Seat = styled.span`
  display: inline;
  position: relative;
  margin: 5px;
  border: 1px solid;
  width: 55px;
  height: 55px;
  background-color: ${(props) => (props.reserved ? "rgb(29, 21, 7)" : "auto")};
`;
