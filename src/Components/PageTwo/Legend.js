import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./Legend.css"

function Legend() {
    let history = useHistory();

    function handleClick() {
        history.push("/confirm");
    }

    return (
        <LegendBox>
            <ReservedFalse /> <Text>Miejsca dostępne</Text>
            <ReservedTrue /> <Text>Miejsca zarezerwowane</Text>
            <YourChoice /> <Text>Twój wybór</Text>
            <Button
                className="button"
                onClick={handleClick}
                variant="contained"
                color="primary"
            >
                Rezerwuj
            </Button>
        </LegendBox>
    )
}

export default Legend;

const LegendBox = styled.div`
  position: relative;
  width: 85%;
  height: 70px;
  border: 1px solid;
  margin: 0% auto;
  padding: 20px;
  min-width: 1386px;
  max-width: 1386px;
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
    background-color: rgb(3, 199, 3);
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