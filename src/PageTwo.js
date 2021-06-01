import React from 'react';
import Audience from './Audience'
import styled from 'styled-components'
import Legend from './Legend';
import CorridorsAndEntrance from './CorridorsAndEntrance';

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

function parseResponse(result) {
  return result
}

class PageTwo extends React.Component {
  static defaultProps = {
    seats: []
  }

  state = {
    seats: this.props.seats,
    options: this.props.options
  }

  componentDidMount = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch('http://localhost:3001/seats')
      .then(response => response.json())
      .then(result => {
        this.setState({ seats: parseResponse(result), isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };

  componentDidUpdate = () => {
    console.log("Component update!")
  }

  render() {
    return (
      <div>
        <Container>
          <CorridorsAndEntrance />
          {this.state.seats.map(seat => <Audience
            id={seat.id}
            key={seat.id}
            reserved={seat.reserved}
          />)}
        </Container>
        <Legend />
      </div>
    )
  }
}

export default PageTwo;
