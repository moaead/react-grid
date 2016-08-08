import * as React from "react";
import * as ReactDOM from "react-dom";
import {Route, IndexRoute, hashHistory} from "react-router"
import App from "./app/App";
import {Grid} from "./app/Components/Grid";
import GridUsage from "./app/Pages/GridUsage";

export default class Routes {
    static getRoutes() {
        return (
            <Route path="/" component={App}>
                <IndexRoute component={GridUsage}/>
            </Route>);
    };
}