import React from 'react';
import './App.css';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";



const Container = styled.div`
  position: absolute;
  width: 280px;
  height: 225px;
  margin: 10% 40%;
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
const Text = styled.p`
  display: inline-block;
`
const Input = styled.input`
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

class PageOne extends React.Component {

  handleClick = () => {
    this.props.history.push('/seats')
  }

  render() {
    return (
      <Container>
        <Text>Liczba miejsc:</Text>
        <Input /> <br />
        <SeatsTogether><input
          type="checkbox"
        />
            Czy miejsca mają być obok siebie?
                </SeatsTogether>
        <ChooseSeats onClick={this.handleClick}>Wybierz miejsca</ChooseSeats>
      </Container>
    );
  }
}

export default withRouter(PageOne);

