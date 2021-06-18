import React from 'react';
import styled from 'styled-components'

const Entrance = styled.span`
    position: relative;
    display: inline-block;
    height: 241px;
    width: 152px;
    border: 1px solid;
    margin: 5px;
    float: left;
`

// const Corridor1 = styled.div`
//     display: inline-block;
//     position: relative;
//     height: 550px;
//     width: 60%;
//     border: 1px solid;
//     margin-left: 2%; 
// `
// const Corridor2 = styled.div`
//     display: inline-block;
//     height: 100px;
//     width: 100px;
//     border: 1px solid;
//     margin 5px;
//     float: left;
// `

// const Corridor3 = styled.div`
//     display: inline-block;
//     height: 100px;
//     width: 100px;
//     border: 1px solid;
//     margin 5px;
//     float: left;
// `
const Names = styled.p`
    margin: 0% auto;
    text-align: center;
    height: 60px;
    padding-top: 40px;

`


class CorridorsAndEntrance extends React.Component {
    render() {
        return (
            <span>
                <Entrance><Names>Wejście</Names></Entrance>
                {/*<Corridor1></Corridor1>
                <Corridor2><p>Corridor2</p></Corridor2>
                <Corridor3><p>Corridor3</p></Corridor3> */}
            </span>
        )
    }
}


export default CorridorsAndEntrance;