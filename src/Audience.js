// import React from 'react'
// import styled from 'styled-components'
// import { withRouter } from "react-router-dom";

// const Seat = styled.span`
//     display: inline-block;
//     position: relative;
//     margin: 5px;
//     border: 1px solid;
//     width: 70px;
//     height: 70px;
//     background-color: ${props => props.reserved ? 'rgb(29, 21, 7)' : 'auto'};
//     `

// function Audience(reserved) {
//     const [clicked, setClicked] = useState('false');

//     handleClick = () => {
//         history.push('/confirm')
//     }

//     yourChoice = () => {
//         setClicked({ clicked: clicked })
//     }

//     return (
//         <span onClick={yourChoice}>
//             <Seat
//                 reserved={reserved}
//                 onClick={yourChoice}
//                 className={clicked ? "picked" : "auto"}>
//             </Seat>
//         </span>
//     )

// }

// export default withRouter(Audience);