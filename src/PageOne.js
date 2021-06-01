import React from 'react';
import './App.css';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 225px;
  margin: 10% auto;
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

class PageOne extends React.Component {
  state = {
    options: 1
  }

  handleClick = () => {
    this.props.history.push('/seats')
  }

  updateOptions = (event) => {
    this.setState({ options: parseInt(event.target.value) })

  }

  render() {
    const options = [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 }
    ]

    return (
      <Container>
        <Text>Liczba miejsc:</Text>
        <SelectPlace options={options} onChange={this.updateOptions} value={parseInt(this.state.options)}>
          {options.map((option) => (
            <option value={option.value} key={option.label}>{option.label}</option>
          ))}
        </SelectPlace> <br />
        <SeatsTogether>
          <input type="checkbox" /> Czy miejsca mają być obok siebie?
                </SeatsTogether>
        <ChooseSeats onClick={this.handleClick}>Wybierz miejsca</ChooseSeats>
      </Container>
    );
  }
}

export default withRouter(PageOne);

