import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 225px;
  margin: 10% auto;
`

const Text = styled.p`
  display: inline-block;
`

const SelectPlace = styled.select`
  display: inline-block;
  height: 20px;
  width: 150px;
  float: right;
  margin-top: 15px;
`

const SeatsTogether = styled.label`
  display: block;
  margin: 20px auto;
  text-align: center;
`
const ChooseSeats = styled.div`
  position: relative;
  width: 280px;
  height: 50px;
  border: 1px solid;
  margin-top: 50px;
  text-align: center;
  padding-top: 25px;
`

function PageOne() {
  const [options, setOptions] = useState(1)
  let history = useHistory()

  function handleClick() {
    history.push('/seats')
  }

  function updateOptions(e) {
     setOptions(e.target.value)
  }

  const optionsChoice = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 }
  ]

  return (
    <Container>
      <Text>Liczba miejsc:</Text>
      <SelectPlace onChange={updateOptions} value={parseInt(options)}>
        {optionsChoice.map((option) => (
          <option value={option.value} key={option.label}>{option.label}</option>
        ))}
      </SelectPlace> <br />
      <SeatsTogether>
        <input type="checkbox" /> Czy miejsca mają być obok siebie?
      </SeatsTogether>
      <ChooseSeats onClick={handleClick}>Wybierz miejsca</ChooseSeats>
    </Container>
  );

}

export default PageOne;

