import React from "react";
import styled from "styled-components";

function SeatsNumber({ options, setOptions }) {
  const optionsChoice = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  function updateOptions(e) {
    setOptions(parseInt(e.target.value));
    console.log(options);
  }

  return (
    <SeatsNumbers onChange={updateOptions} value={parseInt(options)}>
      {optionsChoice.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </SeatsNumbers>
  );
}

export default SeatsNumber;

const SeatsNumbers = styled.select`
  display: block;
  height: 20px;
  width: 150px;
  float: right;
  margin-top: 15px;
  transform: translateY(3px);
`;
