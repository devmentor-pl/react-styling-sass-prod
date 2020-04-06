// ./src/components/Box.js
import React from 'react';
import Row from './Row';

import Logo from './../images/logo.png';

const Box = () => {
    console.log('source-maps');

    return (
        <>
            <h1><img src={ Logo } alt="" />devmentor.pl</h1>
            <p>Uczę się <em>efektywnie</em> pod okiem Mentora!</p>
            {/* 
                Aby rozwiązać problem z polskimi znakami,
                należy konwertować font-y 
                ze wsparciem dla języka polskiego ;)
            */}          
            <Row type="dark" />
            <Row space="medium"/>
        </>
    );
}

export default Box;