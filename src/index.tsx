import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from './containers/App';
import { Queue } from './containers/Queue';

ReactDOM.render(
    <Queue localStorageApi={window.localStorage}/>,
    document.getElementById("root")
);