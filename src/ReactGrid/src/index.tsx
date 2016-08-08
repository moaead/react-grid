import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router"
import Routes from "./routes";

ReactDOM.render(<Router history={hashHistory}>{Routes.getRoutes()}</Router>, document.getElementById('app'));
