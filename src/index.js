import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card';
import Welcome from './components/welcome';


const container = document.getElementById('root');

ReactDOM.render(
    <div>
        <Welcome
            username="Edwin Flores"
        />
        <Card
            title="Technique Guides"
            description="Learn amazin street workout and calisthenie."
            img=""
            leftColor="#A74CF2"
            rightColor="#617BFB"
        />
    </div>,
    container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
