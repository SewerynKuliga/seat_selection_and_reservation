import React from 'react';
import { useEffect, useState } from "react";
import Audience from './Audience'
import styled from 'styled-components'
import Legend from './Legend';

const Container = styled.div`
  position: relative;
  margin: 5% auto;
  margin-bottom: 1%;
  padding-left: 50px;
  padding-right: 50px;
  width: 85%;
  height: 900px;
  border: 1px solid;
  min-width: 1230px;
  max-width: 1260px;
  display: grid;
  grid-template-areas:
    "entrance entrance seat52 seat5 seat4 corridor seat32    seat      seat      seat      corridor2 seat91    seat01    seat01    seat01"
    "entrance entrance seat52 seat5 seat4 corridor seat32    seat      seat      seat      corridor2 seat91    seat01    seat01    seat01"
    "entrance entrance seat52 seat5 seat4 corridor seat32    seat      seat      seat      corridor2 seat91    seat01    seat01    seat01"
    "seat1    seat1    seat1  seat5 seat4 corridor seat32    seat      seat      seat      corridor2 seat91    seat01    seat01    seat01"
    "seat1    seat1    seat1  seat5 seat4 corridor seat32    seat      seat      seat      corridor2 seat91    seat01    seat01    seat01"
    "seat1    seat1    seat1  seat5 seat4 corridor corridor3 corridor3 corridor3 corridor3 corridor2 corridor4 corridor4 corridor4 corridor4"
    "seat1    seat1    seat1  seat5 seat4 corridor seat33    seat33    seat33    seat33    corridor2 seat9     seat02    seat02    seat02"
    "seat1    seat1    seat1  seat5 seat4 corridor seat33    seat33    seat33    seat33    corridor2 seat9     seat02    seat02    seat02"
    "seat1    seat1    seat1  seat5 seat4 corridor seat33    seat33    seat33    seat33    corridor2 seat9     seat02    seat02    seat02"
    "seat1    seat1    seat1  seat5 seat4 corridor seat33    seat33    seat33    seat33    corridor2 seat9     seat02    seat02    seat02";
    grid-auto-columns: 1fr;
    // To na górze to tymczasowe rozwiązanie + uczę się wykorzystywać obszary tabel. Także za czystość kodu tego nie oceniać :D
`
// To na górze to tymczasowe rozwiązanie + uczę się wykorzystywać obszary tabel. Także za czystość kodu tego nie oceniać :D

// const Inputt = styled.input`
//   height: 20px;
//   display:;
// `

// function parseResponse(result) {
//   return result
// }

const Entrance = styled.div`
    grid-area: entrance;
`
const Corridor1 = styled.div`
  grid-area: corridor;
`
const Corridor2 = styled.div`
  grid-area: corridor2;
`
const Corridor3 = styled.div`
  grid-area: corridor3;
`
const Corridor4 = styled.div`
  grid-area: corridor4;
`
// const Corridor5 = styled.div`
//   display: inline-block;
//   background-color: red;
//   position: relative;
//   margin: 5px;
//   border: 1px solid;
//   width: 70px;
//   height: 70px;
//   
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
      {/* <Inputt */}
      {/* // value={this.props.options} 
      > */}
      {/* {this.props.options} */}
      {/* </Inputt> */}
      <Container>
        {seats && seats.map(seats => <Audience
          id={seats.id}
          key={seats.id}
          reserved={seats.reserved}
        />
        )}
        <Entrance />
        <Corridor1 />
        <Corridor2 />
        <Corridor3 />
        <Corridor4 />
        {/* <Corridor5/> */}
      </Container>
      <Legend />
    </div>
  )
}

export default PageTwo;
