import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { ReservationContext } from "../../Contexts/ReservationContext";
import { setAutoFreeze } from "immer";

function Audience({ reserved, seat }) {
  const { chosenSeats, options } = useContext(ReservationContext);
  const [pickedPlace, setPickedPlace] = useState(false);
  // const [color, setColor] = useState("blue");
  // const red = { color: "red" };
  var pickedPlace1 = pickedPlace ? "picked" : "auto";
  // useEffect(() => {
  //   setPickedPlace(pickedPlace);
  // }, [pickedPlace]);

  const handleClick = (seat) => {
    setPickedPlace(!pickedPlace);
    seat.reserved === true ? chosenSeats.push() : chosenSeats.push(seat);
    if (chosenSeats.length > options) {
      chosenSeats.length = 0;
      // setPickedPlace(false);

      // chosenSeats.classList.remove("picked")
    }
    // if(chosenSeats.seat === seat) setColor("red")
    console.log(chosenSeats);

    console.log(options);
  };
  useEffect(() => {}, []);

  return (
    <Seat
      reserved={reserved}
      className={pickedPlace1}
      onClick={() => {
        handleClick(seat);
      }}
    ></Seat>
  );
}

export default Audience;

const Seat = styled.div`
  display: inline;
  position: relative;
  margin: 5px;
  border: 1px solid;
  width: 55px;
  height: 55px;
  background-color: ${(props) => (props.reserved ? "rgb(29, 21, 7)" : "auto")};
`;
