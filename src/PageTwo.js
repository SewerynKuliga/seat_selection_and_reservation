import React from 'react';
import { useEffect, useState } from "react";
import Audience from './Audience'
import styled from 'styled-components'
import Legend from './Legend';
// import CorridorsAndEntrance from './CorridorsAndEntrance';

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
`
const Inputt = styled.input`
  height: 20px;
  display: ;
`

// function parseResponse(result) {
//   return result
// }




function PageTwo() {
  const [seatss, setSeatss] = useState([])

  useEffect(() => {
    const fetchSeats = () => {
      return fetch('http://localhost:3001/seats')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((result) => {
          setSeatss({ seats: result })
        })
    };
    fetchSeats();
    setSeatss(fetch.data)
  }, []);



  return (
    <div>
      <Inputt
      // value={this.props.options} 
      >
        {/* {this.props.options} */}
      </Inputt>
      <Container>
        asdas
        {/* <CorridorsAndEntrance /> */}
        {/* {seatss.seats.map(seat => <Audience
          id={seat.id}
          key={seat.id}
          reserved={seat.reserved}
        />)}  */}
      </Container>
      <Legend />

    </div>
  )
}

export default PageTwo;
