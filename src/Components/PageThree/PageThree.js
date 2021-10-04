import React from 'react';
import styled from 'styled-components'

function PageThree() {
    return (
        <Message>
            <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
            <br />
            <h3>Wybrałeś miejsca:</h3>
            <div>
                
            </div>
            <br />
            <h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
        </Message>
    );
}

export default PageThree;

const Message = styled.div`
    margin: 10% 10% 10% 20%;
`
