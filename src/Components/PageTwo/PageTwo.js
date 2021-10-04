import React from 'react';
import { useEffect, useState } from "react";
import Audience from './Audience';
import styled from 'styled-components';
import Legend from './Legend';
import CinemaScreen from './CinemaScreen';



// const Inputt = styled.input`
//   height: 20px;
//   display:;
// `

// function parseResponse(result) {
//   return result
// }


function PageTwo() {
  const [seats, setSeats] = useState(null);

  const fetchSeats = () => {
    return fetch('http://localhost:3001/seats')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSeats(data)
      })
  }

  useEffect(() => {
    fetchSeats()
  }, [])

  return (
    <div>
      <CinemaScreen />
      <Container>
        {seats && seats.map(seats => <Audience
          id={seats.id}
          key={seats.id}
          reserved={seats.reserved}
        />
        )}
        
      </Container>
      <Legend />

      
    </div>
  )
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
`