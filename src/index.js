import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './ServiceWorkers';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const SLIDES = [
    {
        title: "1",
        text: "Slide 1"
    },
    {
        title: "2",
        text: "Slide 2"
    },
    {
        title: "3",
        text: "Slide 3."
    },
    {
        title: "4",
        text: "Slide 4."
    },
    {
        title: "Great job!",
        text: "slide 5"
    }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
