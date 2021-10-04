import React from 'react';
import './App.css';
import SeatsNumber from './SeatsNumber';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function PageOne() {
  const [options, setOptions] = useState(1);
  const [checked, setChecked] = React.useState(false);
  let history = useHistory();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleClick() {
    history.push('/seats');
  }

  return (
    <Container>
      <Text>Liczba miejsc:</Text>
      <SeatsNumber options={options} setOptions={setOptions} /> <br />
      <SeatsTogether>
        <Checkbox
          checked={checked}
          color="primary"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        /> Czy miejsca mają być obok siebie?
      </SeatsTogether>
      <ChooseSeats onClick={handleClick}>Wybierz miejsca</ChooseSeats>
    </Container>
  );
}

export default PageOne;

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 225px;
  margin: 10% auto;
`
const Text = styled.p`
  display: inline-block;
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