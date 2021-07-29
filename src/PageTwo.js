import React from 'react';
import { useEffect, useState } from "react";
import Audience from './Audience';
import styled from 'styled-components';
import Legend from './Legend';

const Container = styled.div`
  position: relative;
  margin: 5% auto;
  margin-bottom: 1%;

  padding-left: 50px;
  padding-right: 50px;

  height: 700px;
  min-width: 1230px;
  max-width: 1260px;

  border: 1px solid;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
`

// const Inputt = styled.input`
//   height: 20px;
//   display:;
// `

// function parseResponse(result) {
//   return result
// }

// const Entrance = styled.div`
//     grid-area: entrance;
// `
// const Corridor1 = styled.div`
//   grid-area: corridor;
// `
// const Corridor2 = styled.div`
//   grid-area: corridor2;
// `
// const Corridor3 = styled.div`
//   grid-area: corridor3;
// `
// const Corridor4 = styled.div`
//   grid-area: corridor4;
// `

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
      <Container>
        {seats && seats.map(seats => <Audience
          id={seats.id}
          key={seats.id}
          reserved={seats.reserved}
        />
        )}

        {/* <Entrance />
        <Corridor1 />
        <Corridor2 />
        <Corridor3 />
        <Corridor4 /> */}
      </Container>
      <Legend />
    </div>
  )
}

export default PageTwo;
