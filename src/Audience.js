import React from 'react'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";




const Seat = styled.div`
    display: inline-block;
    margin: 5px;
    border: 1px solid;
    padding: 40px;
    background-color: ${props => props.reserved ? 'rgb(29, 21, 7)' : 'auto'};

    `




class Audience extends React.Component {

    state = {
        clicked: false
    }



    handleClick = () => {
        this.props.history.push('/confirm')
    }

    yourChoice = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <span onClick={this.yourChoice}>
                <Seat reserved={this.props.reserved} onClick={this.yourChoice} className={this.state.clicked ? "picked" : "auto"}>

                </Seat>

            </span>
        )
    }

}

export default withRouter(Audience);