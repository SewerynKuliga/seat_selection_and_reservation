import React, { useContext } from "react";
import styled from "styled-components";
import { ReservationContext } from "../../Contexts/ReservationContext";

function PageThree() {
  const { chosenSeats } = useContext(ReservationContext);

  return (
    <Message>
      <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
      <br />
      <h3>Wybrałeś miejsca:</h3>
      <div>
        {
          chosenSeats.map((seat) => {
            return (
              <p>
                Rząd: {seat.cords.x}, miejsce: {seat.cords.y}
              </p>
            );
          })
          // .sort((a, b) => a.seat.cords.x - b.seat.cords.x)
        }
      </div>
      <br />
      <h3>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </h3>
    </Message>
  );
}

export default PageThree;

const Message = styled.div`
  margin: 10% 10% 10% 20%;
`;
