import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  width: 80%;
  min-width: 786px;
  height: 30px;

  position: relative;

  margin: auto;
  margin-top: 2%;
  background-color: rgb(83, 83, 83);
  border-radius: 30px;
`;

function CinemaScreen() {
  return <Screen></Screen>;
}

export default CinemaScreen;
