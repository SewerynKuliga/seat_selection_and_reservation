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
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat'
    'seat seat seat seat seat seat seat seat seat seat seat seat seat seat seat';

`

const SSSS = styled.span`
    display: inline-block;

    background-color: red;

    position: relative;
    margin: 5px;
    border: 1px solid;
    width: 70px;
    height: 70px;
 `

// const SSSSS = styled.div`
//     display: inline-block;

//     background-color: red;

//     position: relative;
//     margin: 5px;
//     border: 1px solid;
//     width: 70px;
//     height: 70px;
//     grid-area: oper;
// `
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
      {/* <Inputt */}
      {/* // value={this.props.options} 
      > */}
      {/* {this.props.options} */}
      {/* </Inputt> */}
      <Container>
        <SSSS></SSSS>
        {seats && seats.map(seats => <Audience
          id={seats.id}
          key={seats.id}
          reserved={seats.reserved}
        />
        )}

        {/* <SSSSS></SSSSS> */}
      </Container>
      <Legend />
    </div>
  )
}

export default PageTwo;
