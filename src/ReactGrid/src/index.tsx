import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router"
import Routes from "./routes";

require("../wwwroot/libs/semantic-ui/dist/semantic.min.js");
require("../wwwroot/libs/semantic-ui/dist/semantic.min.css");
require("datatables.net");
require("datatables.net-dt/css/jquery.dataTables.css");
require("../wwwroot/libs/datatables-semantic-ui/dataTables.semanticui.min.css");
require("../wwwroot/libs/datatables-semantic-ui/dataTables.semanticui.min.js");

$(document).ready(() => {
    ReactDOM.render(<Router history={hashHistory}>{Routes.getRoutes()}</Router>, document.getElementById('app'));
});
