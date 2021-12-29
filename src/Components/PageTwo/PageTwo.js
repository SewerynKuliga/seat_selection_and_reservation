import React from "react";
import { useEffect, useState } from "react";
import Audience from "./Audience";
import styled from "styled-components";
import Legend from "./Legend";
import CinemaScreen from "./CinemaScreen";
import "../../App.css";

function PageTwo() {
  const [allSeats, setAllSeats] = useState([]);
  const fetchSeats = async () => {
    const response = await fetch("http://localhost:3001/seats");
    const data = await response.json();
    console.log(data);
    setAllSeats(data);
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  return (
    <div>
      <CinemaScreen />
      <Container>
        {allSeats &&
          allSeats.map((seat, index) => (
            <Audience
              id={seat.id}
              key={index}
              seat={seat}
              reserved={seat.reserved}
            />
          ))}
      </Container>
      <Legend />
    </div>
  );
}

export default PageTwo;

const Container = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 1%;
  margin-top: 2%;

  padding-left: 50px;
  padding-right: 50px;

  height: 700px;
  min-width: 1230px;
  max-width: 1260px;

  border: 1px solid;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
`;
