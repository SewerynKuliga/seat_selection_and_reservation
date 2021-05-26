import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";

const Button = styled.button`
  display: inline-block;
  position: absolute;
  width: 350px;
  height: 70px;
  margin-left: 10px;
`

const LegendBox = styled.div`
  width: 1350px;
  height: 70px;
  border: 1px solid;
  margin: 0% 10% 0% 10%;
  padding: 20px;
`

const ReservedFalse = styled.div`
    display: inline-block;
    margin: 5px;
    border: 1px solid;
    padding: 30px;
`

const ReservedTrue = styled.div`
    background-color: rgb(29, 21, 7);
    display: inline-block;
    margin: 5px;
    border: 1px solid;
    padding: 30px;
`

const YourChoice = styled.div`
    background-color: rgb(235, 100, 21);
    display: inline-block;
    margin: 5px;
    border: 1px solid;
    padding: 30px;
`

const Text = styled.p`
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 30px;
    transform: translateY(-100%);
    margin-right: 40px;
`



class Legend extends Component {

    handleClick = () => {
        this.props.history.push('/confirm')
    }

    render() {
        return (
            <LegendBox>
                <ReservedFalse></ReservedFalse> <Text>Miejsca dostępne</Text>
                <ReservedTrue></ReservedTrue> <Text>Miejsca zarezerwowane</Text>
                <YourChoice></YourChoice> <Text>Twój wybór</Text>
                <Button onClick={this.handleClick}>Rezerwuj</Button>
            </LegendBox>
        )
    }
}

export default withRouter(Legend);
