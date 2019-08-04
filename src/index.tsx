import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Queue } from './containers/Queue';

const rootElement  = document.getElementById("root");
ReactDOM.render(
    <Queue rootElement={rootElement}/>,
    rootElement
);