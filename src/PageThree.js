import React from 'react';
import styled from 'styled-components'


const Message = styled.div`
    margin: 10% 10% 10% 20%;
`

class PageThree extends React.Component {
    render() {
        return (
            <Message>
                <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
                <br />
                <h3>Wybrałeś miejsca:</h3>
                <p>
                    <br />- rząd x1, miejsce y1 (id1)
                    <br />- rząd x2, miejsce y2 (id2)
                    <br />- rząd x3, miejsce y3 (id3)
                    <br /><br />

                    (widok poglądowy)


                    {/* WIDOK PODGLĄDOWY */}


                </p>
                <br />
                <h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
            </Message>
        );
    }
}

export default PageThree;
