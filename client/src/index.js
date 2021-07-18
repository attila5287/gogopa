import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootswatch/dist/morph/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createPopper } from '@popperjs/core';
import 'bootstrap/js/src/collapse.js';


import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
