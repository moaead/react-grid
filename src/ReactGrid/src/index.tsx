import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router"
import Routes from "./routes";

require("../wwwroot/libs/semantic-ui/dist/semantic.min.js");
require("../wwwroot/libs/semantic-ui/dist/semantic.min.css");

$(document).ready(() => {
    ReactDOM.render(<Router history={hashHistory}>{Routes.getRoutes()}</Router>, document.getElementById('app'));
});
