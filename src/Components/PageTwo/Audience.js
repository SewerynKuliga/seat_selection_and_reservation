import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Audience({ reserved }) {
  const [pickedPlace, setPickedPlace] = useState(false);

  const handleChange = () => {
    setPickedPlace(!pickedPlace);
  };

  useEffect(() => {
    setPickedPlace(pickedPlace);
  }, [pickedPlace]);

  return (
    <Seat
      reserved={reserved}
      className={pickedPlace ? "picked" : "auto"}
      onClick={handleChange}
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
