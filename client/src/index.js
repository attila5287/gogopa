import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootswatch/dist/morph/bootstrap.css';
import '@popperjs/core';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.js';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
