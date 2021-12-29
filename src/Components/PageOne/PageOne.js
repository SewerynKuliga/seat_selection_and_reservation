import SeatsNumber from './SeatsNumber';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import React, { useContext } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ReservationContext } from '../../Contexts/ReservationContext';

function PageOne() {

  const { options, setOptions, checked, setChecked } = useContext(ReservationContext)

  let history = useHistory();

  function handleClick() {
    history.push('/seats');
  }

  return (
    <Container>
      <Text>Liczba miejsc:</Text>
      <SeatsNumber options={options} setOptions={setOptions} /> 
      <SeatsTogether>
        <Checkbox
          checked={checked}
          color="primary"
          onChange={(e) => setChecked(e.target.checked)}
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