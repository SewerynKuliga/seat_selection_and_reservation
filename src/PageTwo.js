import React, { Children } from 'react';
import Audience from './Audience'
import styled from 'styled-components'
import Legend from './Legend';

const Container = styled.div`
  dislay: inline-block;
  position: relative;
  margin: 5% 10% 0% 10%;
  width: 1390px;
  height: 870px;
  border: 1px solid;
`
  
function parseResponse(result) {
  // const template = {
  //   "id": "",
  //   "cords": {
  //     "x": null,
  //     "y": null
  //   },
  //   "reserved": null
  // }

  // const array = new Array(105)

  // for (var x = 1; x <= 7; x++) {

  //   for (var y = 1; y <= 15; y++) {


  //   }

  // }

  // console.log(array)

  return result
}

class PageTwo extends React.Component {

  static defaultProps = {
    seats: []
  }

  state = {
    seats: this.props.seats
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



  render() {
    return (
      <div>
        <Container>
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
